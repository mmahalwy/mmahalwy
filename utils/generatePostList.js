const fs = require('fs');

const list = fs.readdirSync('./pages/blog');

fs.writeFileSync('./pages/blog/list.json', JSON.stringify(list));
