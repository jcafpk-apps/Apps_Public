$html = [System.IO.File]::ReadAllText("C:\Users\jcafp\.openclaw\workspace\mundial-streams\index.html")
$body = @{
    description = "Mundial 2026 Streams"
    public = $true
    files = @{
        "index.html" = @{ content = $html }
    }
}
$json = $body | ConvertTo-Json -Depth 10
[System.Console]::WriteLine($json.Length)
