const readline = require('readline');
const lines = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./2.input'),
});

lineReader.on('line', function(line) {
  lines.push(line.split('\t').map(n => parseInt(n, 10)));
});

lineReader.on('close', () => {
    const result = lines.reduce((sum, line) => sum + Math.max(...line) - Math.min(...line), 0);
  console.log(result);
});
