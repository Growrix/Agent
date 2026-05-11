[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$AppRoot,

    [Parameter(Mandatory = $false)]
    [string]$PlanningRoot,

    [Parameter(Mandatory = $false)]
    [ValidateSet('npm', 'pnpm', 'yarn')]
    [string]$PackageManager = 'npm',

    [Parameter(Mandatory = $false)]
    [switch]$SkipInstall,

    [Parameter(Mandatory = $false)]
    [switch]$SkipFullE2E
)

$ErrorActionPreference = 'Stop'

function Invoke-PackageManagerInstall {
    param([string]$Manager)

    switch ($Manager) {
        'npm' { & npm install }
        'pnpm' { & pnpm install }
        'yarn' { & yarn install }
    }

    if ($LASTEXITCODE -ne 0) {
        throw "Dependency install failed using $Manager."
    }
}

function Invoke-PackageScript {
    param(
        [string]$Manager,
        [string]$ScriptName
    )

    Write-Host ("[frontend-factory] running script: {0}" -f $ScriptName)

    switch ($Manager) {
        'npm' { & npm run $ScriptName }
        'pnpm' { & pnpm run $ScriptName }
        'yarn' { & yarn $ScriptName }
    }

    if ($LASTEXITCODE -ne 0) {
        throw "Script failed: $ScriptName"
    }
}

function Get-JsonFile {
    param([string]$Path)

    if (-not (Test-Path $Path)) {
        throw "Required JSON file not found: $Path"
    }

    return Get-Content $Path -Raw | ConvertFrom-Json
}

function Test-TextInFiles {
    param(
        [string[]]$FilePaths,
        [string]$Needle
    )

    foreach ($filePath in $FilePaths) {
        if (Select-String -Path $filePath -Pattern ([regex]::Escape($Needle)) -Quiet) {
            return $true
        }
    }

    return $false
}

$resolvedAppRoot = (Resolve-Path $AppRoot).Path
$packageJsonPath = Join-Path $resolvedAppRoot 'package.json'
$packageJson = Get-JsonFile -Path $packageJsonPath

$requiredScripts = @(
    'lint',
    'typecheck',
    'test',
    'test:unit',
    'test:a11y',
    'e2e:smoke',
    'e2e:full',
    'build',
    'audit:frontend',
    'release:check'
)

$declaredJourneyIds = @()

if ($PlanningRoot) {
    $resolvedPlanningRoot = (Resolve-Path $PlanningRoot).Path
    $frontendSummaryPath = Join-Path $resolvedPlanningRoot 'frontend.json'
    $frontendSummary = Get-JsonFile -Path $frontendSummaryPath

    if (-not $frontendSummary.execution_contract) {
        throw 'frontend.json is missing execution_contract.'
    }

    if ($frontendSummary.execution_contract.required_scripts) {
        $requiredScripts = @($frontendSummary.execution_contract.required_scripts)
    }

    if ($frontendSummary.execution_contract.mandatory_smoke_journeys) {
        $declaredJourneyIds = @($frontendSummary.execution_contract.mandatory_smoke_journeys)
    }
}

$scriptPropertyNames = @($packageJson.scripts.PSObject.Properties.Name)
$missingScripts = @($requiredScripts | Where-Object { $_ -notin $scriptPropertyNames })

if ($missingScripts.Count -gt 0) {
    throw ("Missing required scripts: {0}" -f ($missingScripts -join ', '))
}

$smokeFiles = @()
$smokeFiles += Get-ChildItem -Path (Join-Path $resolvedAppRoot 'tests\e2e') -Filter '*.ts' -Recurse -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName
$smokeFiles += Get-ChildItem -Path (Join-Path $resolvedAppRoot 'tests\a11y') -Filter '*.ts' -Recurse -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName

if ($declaredJourneyIds.Count -gt 0) {
    $missingJourneys = @()

    foreach ($journeyId in $declaredJourneyIds) {
        if (-not (Test-TextInFiles -FilePaths $smokeFiles -Needle $journeyId)) {
            $missingJourneys += $journeyId
        }
    }

    if ($missingJourneys.Count -gt 0) {
        throw ("Mandatory smoke journeys missing from executable tests: {0}" -f ($missingJourneys -join ', '))
    }
}

Push-Location $resolvedAppRoot

try {
    if ((-not $SkipInstall) -and (-not (Test-Path (Join-Path $resolvedAppRoot 'node_modules')))) {
        Invoke-PackageManagerInstall -Manager $PackageManager
    }

    Invoke-PackageScript -Manager $PackageManager -ScriptName 'lint'
    Invoke-PackageScript -Manager $PackageManager -ScriptName 'typecheck'
    Invoke-PackageScript -Manager $PackageManager -ScriptName 'test:unit'
    Invoke-PackageScript -Manager $PackageManager -ScriptName 'test:a11y'
    Invoke-PackageScript -Manager $PackageManager -ScriptName 'e2e:smoke'
    Invoke-PackageScript -Manager $PackageManager -ScriptName 'build'
    Invoke-PackageScript -Manager $PackageManager -ScriptName 'audit:frontend'

    if (-not $SkipFullE2E) {
        Invoke-PackageScript -Manager $PackageManager -ScriptName 'e2e:full'
    }

    Write-Host '[frontend-factory] release check passed.'
}
finally {
    Pop-Location
}