var fs = require('fs');

file = process.argv[2];

buffer = fs.readFileSync(file);

console.log(buffer.toString().split('\n').length - 1);