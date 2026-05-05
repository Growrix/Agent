$ErrorActionPreference = 'Stop'

$frontendRoot = Split-Path -Parent $PSScriptRoot
$jsonPath = Join-Path $frontendRoot 'content.en-US.json'
$pagesPath = Join-Path $frontendRoot 'pages'
$componentsPath = Join-Path $frontendRoot 'components'

if (-not (Test-Path -LiteralPath $jsonPath)) {
  throw "Missing content JSON at: $jsonPath"
}

$data = Get-Content -LiteralPath $jsonPath -Raw | ConvertFrom-Json
$jsonKeys = $data.PSObject.Properties.Name

$yamlKeyRegex = '^\s*-\s+([a-z0-9_]+(?:\.[a-z0-9_]+)+)\s*$'

$used = New-Object 'System.Collections.Generic.HashSet[string]'

$files = @()
if (Test-Path -LiteralPath $pagesPath) {
  $files += Get-ChildItem -LiteralPath $pagesPath -Filter '*.md' -File
}
if (Test-Path -LiteralPath $componentsPath) {
  $files += Get-ChildItem -LiteralPath $componentsPath -Filter '*.md' -File
}

foreach ($f in $files) {
  foreach ($line in (Get-Content -LiteralPath $f.FullName)) {
    $m = [regex]::Match($line, $yamlKeyRegex, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if ($m.Success) {
      [void]$used.Add($m.Groups[1].Value)
    }
  }
}

$usedKeys = @($used | Sort-Object)

$missing = $usedKeys | Where-Object { $_ -notin $jsonKeys } | Sort-Object
$extra = $jsonKeys | Where-Object { $_ -notin $usedKeys } | Sort-Object

Write-Host "JSON keys:   $($jsonKeys.Count)"
Write-Host "Used keys:   $($usedKeys.Count)"
Write-Host "Missing:     $($missing.Count)"
Write-Host "Extra:       $($extra.Count)"

if ($missing.Count -gt 0) {
  Write-Host '--- Missing (first 200) ---'
  $missing | Select-Object -First 200 | ForEach-Object { Write-Host $_ }
}

if ($extra.Count -gt 0) {
  Write-Host '--- Extra (first 200) ---'
  $extra | Select-Object -First 200 | ForEach-Object { Write-Host $_ }
}
