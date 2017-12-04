const readline = require('readline');
const lines = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./2.input'),
});

lineReader.on('line', function(line) {
  lines.push(line.split('\t').map(n => parseInt(n, 10)));
});

function flatten(arr) {
  return Array.prototype.concat(...arr);
}

function getCombinations(numbers) {
  return numbers.map(number1 => numbers.map(number2 => [number1, number2]));
}

lineReader.on('close', () => {
  const combinationsLines = lines
    .map(line => getCombinations(line))
    .map(flatten);
  const divisibleCouples = combinationsLines
    .map(combinations =>
      combinations.filter(
        ([n1, n2]) => (n2 > n1 && n2 % n1 === 0) || (n1 > n2 && n2 % n1 === 0)
      )
    )
    .map(flatten);

  const result = divisibleCouples
    .map(([n1, n2]) => n2 > n1 ? n2 / n1 : n1 / n2)
    .reduce((sum, n) => sum + n, 0);
  console.log(result);

  //   const result = lines.reduce((sum, line) => {

  //       line.forEach()

  //     }sum + Math.max(...line) - Math.min(...line), 0);
  //   console.log(result);
});
