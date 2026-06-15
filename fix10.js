const fs = require('fs');
let c = fs.readFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', 'utf8');
c = c.replace('Tonen7Jcafpk', 'Tonen/Jcafpk');
fs.writeFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', c, 'utf8');
console.log('DONE');
