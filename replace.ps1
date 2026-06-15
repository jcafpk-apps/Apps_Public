$path = "C:\Users\jcafp\.openclaw\workspace\mundial-streams\index.html"
$content = [System.IO.File]::ReadAllText($path)

$old = '      const q = encodeURIComponent(`${m.home_team_name_en} vs ${m.away_team_name_en} World Cup 2026 live stream`);

      html += `<a class="stream-btn no-stream" href="https://www.google.com/search?q=${q}" target="_blank" rel="noopener">🔍 buscar transmisión</a>`;'

$new = '      const q = encodeURIComponent(`${m.home_team_name_en} vs ${m.away_team_name_en} World Cup 2026`);
      if (live) {
        html += `<a class="stream-btn no-stream" href="https://www.google.com/search?q=${q}+live+stream" target="_blank" rel="noopener">🔍 Google</a>`;
        html += `<a class="stream-btn no-stream" href="https://www.youtube.com/results?search_query=${q}+live" target="_blank" rel="noopener">▶ YouTube</a>`;
        html += `<a class="stream-btn no-stream" href="https://old.reddit.com/r/soccerstreams/search?q=${q}&restrict_sr=on&sort=new" target="_blank" rel="noopener">👽 Reddit</a>`;
      } else {
        html += `<a class="stream-btn no-stream" href="https://www.google.com/search?q=${q}+transmision" target="_blank" rel="noopener">🔍 buscar transmisión</a>`;
      }'

if ($content.Contains($old)) {
    $content = $content.Replace($old, $new)
    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
    Write-Host "REPLACED OK"
} else {
    Write-Host "OLD TEXT NOT FOUND"
}
