$ErrorActionPreference = "Stop"

$workspace = "D:\OneDrive - Fresenius\Documents\Portfolio BTS SIO SISR"
$inputPath = Join-Path $workspace "tableau-synthese-a-completer.xlsx"
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$outputPath = Join-Path $workspace ("tableau-synthese-complete-" + $timestamp + ".xlsx")
$tempDir = Join-Path $workspace (".tmp-tableau-synthese-" + [guid]::NewGuid().ToString())

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory($inputPath, $tempDir)

$sheetPath = Join-Path $tempDir "xl\worksheets\sheet1.xml"
$sheetXml = New-Object System.Xml.XmlDocument
$sheetXml.PreserveWhitespace = $true
$sheetXml.Load($sheetPath)

$ns = New-Object System.Xml.XmlNamespaceManager($sheetXml.NameTable)
$ns.AddNamespace("x", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")

function Set-InlineCell {
  param(
    [string]$CellRef,
    [string]$Text
  )

  $cell = $sheetXml.SelectSingleNode("//x:c[@r='$CellRef']", $ns)
  if (-not $cell) {
    throw "Cellule introuvable : $CellRef"
  }

  while ($cell.HasChildNodes) {
    [void]$cell.RemoveChild($cell.FirstChild)
  }

  $null = $cell.SetAttribute("t", "inlineStr")

  $isNode = $sheetXml.CreateElement("is", $ns.LookupNamespace("x"))
  $tNode = $sheetXml.CreateElement("t", $ns.LookupNamespace("x"))
  $tNode.InnerText = $Text
  [void]$isNode.AppendChild($tNode)
  [void]$cell.AppendChild($isNode)
}

function Clear-Cell {
  param(
    [string]$CellRef
  )

  $cell = $sheetXml.SelectSingleNode("//x:c[@r='$CellRef']", $ns)
  if (-not $cell) {
    throw "Cellule introuvable : $CellRef"
  }

  while ($cell.HasChildNodes) {
    [void]$cell.RemoveChild($cell.FirstChild)
  }

  if ($cell.HasAttribute("t")) {
    $cell.RemoveAttribute("t")
  }
}

function Set-RowHeight {
  param(
    [int]$RowNumber,
    [string]$Height
  )

  $row = $sheetXml.SelectSingleNode("//x:row[@r='$RowNumber']", $ns)
  if (-not $row) {
    throw "Ligne introuvable : $RowNumber"
  }

  $null = $row.SetAttribute("ht", $Height)
  $null = $row.SetAttribute("customHeight", "1")
}

Set-InlineCell -CellRef "A3" -Text "Nom et prenom du candidat : Noah"
Set-InlineCell -CellRef "A5" -Text "Adresse URL du portfolio : portfolio local (index.html)"
Set-InlineCell -CellRef "G4" -Text "[X] SISR"
Set-InlineCell -CellRef "H4" -Text "[ ] SLAM"

$formationRealisations = @(
  @{
    Row = 9
    Title = "Maquettage d'une infrastructure reseau VLAN / firewall / routage"
    Period = "01/09/24 au 31/10/24"
    Marks = @("C", "F", "G")
  },
  @{
    Row = 10
    Title = "Installation Windows Server, AD, DNS et DHCP"
    Period = "01/10/24 au 30/11/24"
    Marks = @("C", "G")
  },
  @{
    Row = 11
    Title = "Deploiement d'une solution Linux d'infrastructure"
    Period = "01/10/24 au 31/12/24"
    Marks = @("C", "G")
  },
  @{
    Row = 12
    Title = "Supervision Centreon, SNMP et analyse des journaux"
    Period = "01/11/24 au 31/01/25"
    Marks = @("D", "G")
  },
  @{
    Row = 13
    Title = "Automatisation de taches d'administration Bash / PowerShell"
    Period = "01/12/24 au 28/02/25"
    Marks = @("G", "H")
  },
  @{
    Row = 14
    Title = "Projet web WordPress et presence en ligne"
    Period = "01/01/25 au 31/03/25"
    Marks = @("E", "F")
  },
  @{
    Row = 15
    Title = "Projet BTS 1 - analyse, dossier technique et maquettage"
    Period = "01/02/25 au 30/04/25"
    Marks = @("F")
  },
  @{
    Row = 16
    Title = "Projet BTS 2 - integration, tests et deploiement"
    Period = "01/03/25 au 30/05/25"
    Marks = @("F", "G")
  },
  @{
    Row = 17
    Title = "Protection des donnees, cybersecurite et bonnes pratiques"
    Period = "01/04/25 au 30/06/25"
    Marks = @("D", "H")
  },
  @{
    Row = 18
    Title = "Veille technologique et orientation post-BTS"
    Period = "01/09/24 au 30/06/25"
    Marks = @("H")
  }
)

$realisations = @(
  @{
    Row = 20
    Title = "KACE - inventaire et deploiement"
    Period = "01/09/24 au 31/10/24"
    Marks = @("C", "G")
  },
  @{
    Row = 21
    Title = "ServiceNow - gestion des tickets"
    Period = "01/09/24 au 31/12/24"
    Marks = @("D")
  },
  @{
    Row = 22
    Title = "Centreon - supervision"
    Period = "01/11/24 au 31/01/25"
    Marks = @("G")
  },
  @{
    Row = 23
    Title = "WordPress - projet web"
    Period = "01/01/25 au 31/03/25"
    Marks = @("E")
  },
  @{
    Row = 24
    Title = "Projet 1 BTS"
    Period = "01/02/25 au 30/04/25"
    Marks = @("F")
  },
  @{
    Row = 25
    Title = "Veille technologique et cyber"
    Period = "01/09/24 au 30/06/25"
    Marks = @("H")
  },
  @{
    Row = 26
    Title = "Support parc / Active Directory"
    Period = "01/03/25 au 30/06/25"
    Marks = @("C", "D")
  },
  @{
    Row = 28
    Title = "NetBox - cartographie reseau"
    Period = "01/09/25 au 31/10/25"
    Marks = @("C", "G")
  },
  @{
    Row = 29
    Title = "Gestion du parc / SCCM / AD"
    Period = "01/09/25 au 30/11/25"
    Marks = @("C")
  },
  @{
    Row = 30
    Title = "Migration Windows 11"
    Period = "01/10/25 au 31/01/26"
    Marks = @("F", "G")
  },
  @{
    Row = 31
    Title = "Incident BIOS a distance"
    Period = "01/11/25 au 31/01/26"
    Marks = @("D")
  },
  @{
    Row = 32
    Title = "Dell Command Configure - BIOS"
    Period = "01/11/25 au 31/01/26"
    Marks = @("G")
  },
  @{
    Row = 33
    Title = "KACE - deploiements logiciels"
    Period = "01/09/25 au 31/12/25"
    Marks = @("C", "G")
  },
  @{
    Row = 34
    Title = "Projet professionnel / LinkedIn / KnowBe4"
    Period = "01/09/25 au 31/03/26"
    Marks = @("H")
  }
)

$competenceColumns = @("C", "D", "E", "F", "G", "H")

foreach ($item in $formationRealisations) {
  $row = $item.Row
  Set-InlineCell -CellRef ("A{0}" -f $row) -Text $item.Title
  Set-InlineCell -CellRef ("B{0}" -f $row) -Text $item.Period
  Set-RowHeight -RowNumber $row -Height "52"

  foreach ($column in $competenceColumns) {
    $cellRef = "{0}{1}" -f $column, $row
    if ($item.Marks -contains $column) {
      Set-InlineCell -CellRef $cellRef -Text "X"
    }
    else {
      Clear-Cell -CellRef $cellRef
    }
  }
}

foreach ($item in $realisations) {
  $row = $item.Row
  Set-InlineCell -CellRef ("A{0}" -f $row) -Text $item.Title
  Set-InlineCell -CellRef ("B{0}" -f $row) -Text $item.Period
  Set-RowHeight -RowNumber $row -Height "52"

  foreach ($column in $competenceColumns) {
    $cellRef = "{0}{1}" -f $column, $row
    if ($item.Marks -contains $column) {
      Set-InlineCell -CellRef $cellRef -Text "X"
    }
    else {
      Clear-Cell -CellRef $cellRef
    }
  }
}

$sheetXml.Save($sheetPath)

if (Test-Path $outputPath) {
  [System.IO.File]::Delete($outputPath)
}
$fileStream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::Create)
$archive = New-Object System.IO.Compression.ZipArchive($fileStream, [System.IO.Compression.ZipArchiveMode]::Create)

Get-ChildItem -LiteralPath $tempDir -Recurse -File | ForEach-Object {
  $relativePath = $_.FullName.Substring($tempDir.Length + 1).Replace('\', '/')
  $entry = $archive.CreateEntry($relativePath)
  $entryStream = $entry.Open()
  $sourceStream = [System.IO.File]::OpenRead($_.FullName)
  $sourceStream.CopyTo($entryStream)
  $sourceStream.Dispose()
  $entryStream.Dispose()
}

$archive.Dispose()
$fileStream.Dispose()
[System.GC]::Collect()
[System.GC]::WaitForPendingFinalizers()
Start-Sleep -Milliseconds 300

try {
  Get-ChildItem -LiteralPath $tempDir -Recurse -Force | ForEach-Object {
    $_.Attributes = "Normal"
  }

  Remove-Item -LiteralPath $tempDir -Recurse -Force
}
catch {
}

Write-Output $outputPath
