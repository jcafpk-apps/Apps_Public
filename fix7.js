const fs = require('fs');
let c = fs.readFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', 'utf8');

// Change default view from 'all' to 'today'
c = c.replace('curView = "all";', 'curView = "today";');

// Change active button from Todos to Hoy
c = c.replace('class="filter-btn active" data-view="all"', 'class="filter-btn" data-view="all"');
c = c.replace('class="filter-btn" data-view="today"', 'class="filter-btn active" data-view="today"');

// Remove En Vivo button
c = c.replace('<button class="filter-btn" data-view="live">En Vivo</button>\n    ', '');

// Make calendar always visible (was hidden for groups, keep showing for all non-groups)
// The calendar already shows for non-groups views, just need to ensure today shows it too

fs.writeFileSync('C:/Users/jcafp/.openclaw/workspace/mundial-streams/index.html', c, 'utf8');
console.log('DONE');
