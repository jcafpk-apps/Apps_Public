const fs = require('fs');
let c = fs.readFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', 'utf8');

// Find and replace the YouTube URL to add live filter
const oldYt = 'https://www.youtube.com/results?search_query=' + "' + q + '+live'";
const newYt = "https://www.youtube.com/results?search_query=" + "' + q + '+en+vivo&sp=EgJAAQ%3D%3D'";

if (c.includes(oldYt)) {
  c = c.replace(oldYt, newYt);
  fs.writeFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', c, 'utf8');
  console.log('YT UPDATED');
} else {
  console.log('YT NOT FOUND');
}
