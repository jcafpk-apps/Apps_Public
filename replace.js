const fs = require('fs');
let c = fs.readFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', 'utf8');

const search = 'const q = encodeURIComponent(`${m.home_team_name_en} vs ${m.away_team_name_en} World Cup 2026 live stream`);\n' +
'      html += `<a class="stream-btn no-stream" href="https://www.google.com/search?q=${q}" target="_blank" rel="noopener">\uD83D\uDD0D buscar transmisi\u00F3n</a>`;';

const replace = 'const q = encodeURIComponent(`${m.home_team_name_en} vs ${m.away_team_name_en} World Cup 2026`);\n' +
'      if (live) {\n' +
'        html += `<a class="stream-btn no-stream" href="https://www.google.com/search?q=${q}+live+stream" target="_blank" rel="noopener">\uD83D\uDD0D Google</a>`;\n' +
'        html += `<a class="stream-btn no-stream" href="https://www.youtube.com/results?search_query=${q}+live" target="_blank" rel="noopener">\u25B6 YouTube</a>`;\n' +
'        html += `<a class="stream-btn no-stream" href="https://old.reddit.com/r/soccerstreams/search?q=${q}&restrict_sr=on&sort=new" target="_blank" rel="noopener">\uD83D\uDC7D Reddit</a>`;\n' +
'      } else {\n' +
'        html += `<a class="stream-btn no-stream" href="https://www.google.com/search?q=${q}+transmision" target="_blank" rel="noopener">\uD83D\uDD0D buscar transmisi\u00F3n</a>`;\n' +
'      }';

if (c.includes(search)) {
  c = c.replace(search, replace);
  fs.writeFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', c, 'utf8');
  console.log('REPLACED OK');
} else {
  console.log('NOT FOUND - showing context around "buscar"');
  const idx = c.indexOf('buscar');
  if (idx >= 0) {
    console.log(c.substring(Math.max(0, idx - 200), idx + 200));
  } else {
    console.log('String not found at all');
  }
}
