const VALUE = 289326;
const GRID_SIZE = Math.floor(Math.sqrt(VALUE)) + 2;

const finalValue = GRID_SIZE * GRID_SIZE;

const grid = [];

for (
  let currentSpiralSize = 1;
  currentSpiralSize <= GRID_SIZE;
  currentSpiralSize++
) {
  grid.push(new Array(GRID_SIZE).fill(0));
}

let lastRow = null;
let lastCol = null;
let lastValue = null;

for (let i = 0; 2 * i + 1 <= GRID_SIZE; i++) {
  const currentSpiralSize = 2 * i + 1;

  const halfSize = i;

  if (currentSpiralSize > 1) {
    lastCol++;
    grid[lastRow][lastCol] = ++lastValue;

    for (let j = 1; j < currentSpiralSize - 1; j++) {
      lastRow--;
      grid[lastRow][lastCol] = ++lastValue;
    }

    for (let j = 1; j < currentSpiralSize; j++) {
      lastCol--;
      grid[lastRow][lastCol] = ++lastValue;
    }

    for (let j = 1; j < currentSpiralSize; j++) {
      lastRow++;
      grid[lastRow][lastCol] = ++lastValue;
    }

    for (let j = 1; j < currentSpiralSize; j++) {
      lastCol++;
      grid[lastRow][lastCol] = ++lastValue;
    }
  }

  const row = lastRow;
  const col = lastCol + 1;

  if (currentSpiralSize === 1) {
    const initialRow = Math.floor(GRID_SIZE / 2);
    const initialCol = Math.floor(GRID_SIZE / 2);
    grid[initialRow][initialCol] = 1;

    lastRow = initialRow;
    lastCol = initialCol;
    lastValue = 1;
  }
}

const findPosition = value => {
  let y = null;
  const x = grid.findIndex(row => {
    y = row.findIndex(val => val === value);

    return y !== -1;
  });

  return [x, y];
};

const findDistance = (value1, value2) => {
  const [x1, y1] = findPosition(value1);
  const [x2, y2] = findPosition(value2);

  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
};

const result = findDistance(VALUE, 1);
console.log(result);
