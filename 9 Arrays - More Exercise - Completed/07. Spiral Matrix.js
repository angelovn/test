function solve(row, col) {
  let result = [];

  let startNumber = 1;

  let startCol = 0;

  let endCol = col - 1;

  let startRow = 0;

  let endRow = row - 1;

  for (let i = 0; i < row; i++) {
    result.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = startNumber;

      startNumber++;
    }

    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = startNumber;

      startNumber++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = startNumber;

      startNumber++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = startNumber;

      startNumber++;
    }

    startCol++;
  }

  return (result = result.forEach((row) => console.log(row.join(" "))));
}
solve(5, 5);
solve(3, 3);
