$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeDir = Join-Path $root ".tools\node-v24.15.0-win-x64"
$env:PATH = "$nodeDir;$env:PATH"

Set-Location $root
& (Join-Path $nodeDir "npm.cmd") run dev
