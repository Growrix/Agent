$ErrorActionPreference = 'Stop'

$frontendRoot = Split-Path -Parent $PSScriptRoot
$jsonPath = Join-Path $frontendRoot 'content.en-US.json'
$outPath = Join-Path $frontendRoot 'content-library.md'

if (-not (Test-Path -LiteralPath $jsonPath)) {
  throw "Missing content JSON at: $jsonPath"
}

$data = Get-Content -LiteralPath $jsonPath -Raw | ConvertFrom-Json
$keys = $data.PSObject.Properties.Name | Sort-Object

$items = foreach ($k in $keys) {
  $v = $data.PSObject.Properties[$k].Value

  $segments = $k -split '\.'
  $surface = $segments[0]
  $group = if ($segments.Length -ge 2) { "$($segments[0]).$($segments[1])" } else { $segments[0] }

  $valueText = if ($null -eq $v) { '' } else { [string]$v }
  $valueText = $valueText -replace '\r?\n', '\\n'

  [pscustomobject]@{ key = $k; value = $valueText; surface = $surface; group = $group }
}

$pageSurfaces = @(
  'home','services','service_detail','areas','area_detail','reviews','about','contact','quote','faq','blog','privacy','terms','not_found'
)
$sharedSurfaces = @('global','component','forms')
$systemSurfaces = @('errors','validation','seo')

$lines = New-Object System.Collections.Generic.List[string]

function Add-Surface([string]$surfaceName) {
  $surfaceItems = $items | Where-Object { $_.surface -eq $surfaceName }
  if (($surfaceItems | Measure-Object).Count -eq 0) { return }

  $lines.Add("## Surface: $surfaceName")
  $groups = $surfaceItems | Select-Object -ExpandProperty group -Unique | Sort-Object
  foreach ($g in $groups) {
    $lines.Add('')
    $lines.Add("### $g")
    $groupItems = $surfaceItems | Where-Object { $_.group -eq $g } | Sort-Object -Property key
    foreach ($it in $groupItems) {
      $lines.Add(('- {0}: "{1}"' -f $it.key, $it.value))
    }
  }
  $lines.Add('')
}

$forbiddenWords = @('synergy','world-class','best-in-class','leverage','disruptive','innovative')
$violations = foreach ($it in $items) {
  foreach ($w in $forbiddenWords) {
    if ($it.value -match [regex]::Escape($w)) {
      [pscustomobject]@{ word = $w; key = $it.key }
    }
  }
}

$lines.Add('---')
$lines.Add('document_type: content-library')
$lines.Add('project_name: local-plumbing-marketing-site')
$lines.Add('default_locale: en-US')
$lines.Add('locales: [en-US]')
$lines.Add('i18n_required: false')
$lines.Add('build_stage: 2-design-foundation')
$lines.Add('depends_on:')
$lines.Add('  - master-ui-architecture.md')
$lines.Add('  - design-system.md')
$lines.Add('  - ../brief.json')
$lines.Add('---')
$lines.Add('')
$lines.Add('# Content Library - local-plumbing-marketing-site')
$lines.Add('')
$lines.Add('## 1. Voice & Tone')
$lines.Add('- Voice: trustworthy')
$lines.Add('- Tone: clear, friendly, local')
$lines.Add('- Reading level: Grade 6-8 (plain language)')
$lines.Add('- Forbidden words: synergy, world-class, best-in-class, leverage, disruptive, innovative')
$lines.Add('')
$lines.Add('## 2. Naming Convention')
$lines.Add('- Dot-notated keys.')
$lines.Add('- Surface-first: <page>.<section>.<key> (e.g., home.hero.headline).')
$lines.Add('- global.* for header/footer/nav primitives; component.* for reusable UI copy; errors.* and validation.* for system messages.')
$lines.Add('')
$lines.Add('## 3. Content Surfaces')
$lines.Add('Machine source of truth: content.en-US.json (same folder).')
$lines.Add('')
foreach ($s in $pageSurfaces) { Add-Surface $s }

$lines.Add('## 4. Shared Component Surfaces')
$lines.Add('')
foreach ($s in $sharedSurfaces) { Add-Surface $s }

$lines.Add('## 5. Errors and Validation')
$lines.Add('')
Add-Surface 'errors'
Add-Surface 'validation'

$lines.Add('## 6. SEO Block')
$lines.Add('')
Add-Surface 'seo'

$lines.Add('## 7. Schema.org Snippets')
$lines.Add('- Industry pack requires LocalBusiness JSON-LD across public pages.')
$lines.Add('- Schema values are rendered from CMS site settings (name/phone/hours/address/serviceArea/aggregateRating) and page CMS content (services/areas/reviews).')
$lines.Add('')

$lines.Add('## 8. Trust Copy')
$lines.Add('- trust.* keys are labels and short copy that pair with CMS-managed business identity values.')
$lines.Add('')
Add-Surface 'trust'

$lines.Add('## 9. Forbidden Words Audit')
if (($violations | Measure-Object).Count -eq 0) {
  $lines.Add('- No forbidden words found in this locale set.')
} else {
  $lines.Add('- Violations detected (key -> forbidden word):')
  foreach ($v in $violations | Sort-Object word, key) {
    $lines.Add(('  - {0} -> {1}' -f $v.key, $v.word))
  }
}
$lines.Add('')
$lines.Add('## 10. Open Questions')
$lines.Add('- Legal review needed for privacy.body and terms.body.')
$lines.Add('- Confirm business license number format (rendered from CMS site settings).')

$lines | Set-Content -LiteralPath $outPath -Encoding UTF8

Write-Host "Wrote $outPath ($($keys.Count) keys)"