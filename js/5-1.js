const readline = require('readline');
const lines = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./5.input'),
});

lineReader.on('line', function(line) {
  lines.push(parseInt(line, 10));
});

lineReader.on('close', () => {
  const state = {
    steps: 0,
    array: lines,
    index: 0,
  };

  while (state.index >= 0 && state.index < lines.length) {
    const newIndex = state.index + state.array[state.index];
    state.array[state.index] = state.array[state.index] + 1;
    state.index = newIndex;
    state.steps = state.steps + 1;
  }
  console.log(state.steps);
});
