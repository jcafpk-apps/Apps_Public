const fs = require('fs');
let c = fs.readFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', 'utf8');

const old = 'function status(m) {\n  var hasScore = m.home_score !== undefined && m.home_score !== null && m.home_score !== "" && m.away_score !== undefined && m.away_score !== null && m.away_score !== "";\n  if (m.finished === "TRUE" || m.time_elapsed === "finished") return "finished";\n  if (hasScore && m.time_elapsed && m.time_elapsed !== "null" && m.time_elapsed !== "finished") return "live";\n  if (hasScore && !m.time_elapsed) return "finished";\n  return "scheduled";\n}';

const nw = 'function status(m) {\n  var te = m.time_elapsed;\n  if (m.finished === "TRUE" || te === "finished") return "finished";\n  if (te === "notstarted" || te === "null" || !te) return "scheduled";\n  if (te) return "live";\n  return "scheduled";\n}';

if (c.includes(old)) {
  c = c.replace(old, nw);
  fs.writeFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', c, 'utf8');
  console.log('REPLACED');
} else {
  console.log('NOT FOUND');
}
