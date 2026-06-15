const fs = require('fs');
let c = fs.readFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', 'utf8');

const search = 'function status(m) {\n  if (m.finished === "TRUE" || m.time_elapsed === "finished") return "finished";\n  if (m.time_elapsed && m.time_elapsed !== "null" && m.time_elapsed !== "finished") return "live";\n  return "scheduled";\n}';

const replace = 'function status(m) {\n  var hasScore = m.home_score !== undefined && m.home_score !== null && m.home_score !== "" && m.away_score !== undefined && m.away_score !== null && m.away_score !== "";\n  if (m.finished === "TRUE" || m.time_elapsed === "finished") return "finished";\n  if (hasScore && m.time_elapsed && m.time_elapsed !== "null" && m.time_elapsed !== "finished") return "live";\n  if (hasScore && !m.time_elapsed) return "finished";\n  return "scheduled";\n}';

if (c.includes(search)) {
  c = c.replace(search, replace);
  fs.writeFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', c, 'utf8');
  console.log('REPLACED');
} else {
  console.log('NOT FOUND');
}
