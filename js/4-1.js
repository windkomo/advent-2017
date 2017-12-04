const readline = require('readline');
const lines = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./3.input'),
});

lineReader.on('line', function(line) {
  lines.push(line);
});

lineReader.on('close', () => {
  const result = lines.reduce((sum, line) => {
    const words = line.split(' ');
    return sum + (words.length === new Set(words).size ? 1 : 0);
  }, 0);
  console.log(result);
});
