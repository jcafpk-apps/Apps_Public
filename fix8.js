const fs = require('fs');
let c = fs.readFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', 'utf8');
c = c.replace('mundial <span class="accent">streams</span>', 'mundial <span class="accent">2026</span>');
fs.writeFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', c, 'utf8');
console.log('DONE');
