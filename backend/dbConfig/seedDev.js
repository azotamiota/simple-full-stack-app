const db = require('./init');
const {readFileSync} = require('fs');

const seeds = readFileSync(__dirname + '/seed_data.sql').toString();

db.query(seeds, () => console.log('Dev database seeded'));
