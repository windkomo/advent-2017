const VALUE = 289326;
// const GRID_SIZE = Math.floor(Math.sqrt(VALUE)) + 2;
const GRID_SIZE = 9;

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

const sumAdjacents = (row, col) => {
  const firstRow = grid[row - 1] || new Array(col + 1).fill(0);
  const lastRow = grid[row + 1] || new Array(col + 1).fill(0);

  const sum =
    (firstRow[col - 1] || 0) +
    firstRow[col] +
    (firstRow[col + 1] || 0) +
    (grid[row][col - 1] || 0) +
    grid[row][col] +
    (grid[row][col + 1] || 0) +
    (lastRow[col - 1] || 0) +
    lastRow[col] +
    (lastRow[col + 1] || 0);

  if (sum > VALUE) {
    console.log(sum);
  }

  return sum;
};

for (let i = 0; 2 * i + 1 <= GRID_SIZE; i++) {
  const currentSpiralSize = 2 * i + 1;

  const halfSize = i;

  if (currentSpiralSize > 1) {
    lastCol++;
    lastValue = sumAdjacents(lastRow, lastCol);
    grid[lastRow][lastCol] = lastValue;

    for (let j = 1; j < currentSpiralSize - 1; j++) {
      lastRow--;
      lastValue = sumAdjacents(lastRow, lastCol);
      grid[lastRow][lastCol] = lastValue;
    }

    for (let j = 1; j < currentSpiralSize; j++) {
      lastCol--;
      lastValue = sumAdjacents(lastRow, lastCol);
      grid[lastRow][lastCol] = lastValue;
    }

    for (let j = 1; j < currentSpiralSize; j++) {
      lastRow++;
      lastValue = sumAdjacents(lastRow, lastCol);
      grid[lastRow][lastCol] = lastValue;
    }

    for (let j = 1; j < currentSpiralSize; j++) {
      lastCol++;
      lastValue = sumAdjacents(lastRow, lastCol);
      grid[lastRow][lastCol] = lastValue;
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
