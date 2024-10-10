// Javascript Tutorial
// 2-DIMENSIONAL ARRAYS

// 2D array - multi-dimensional arrray that stores a matrix of data in rows and columns
//            userfule for games, spreadsheets, representing images, etc

//          [
//            [x, y, z],
//            [a, b, c],
//            [1, 2, 3],
//                      ]

const _result = document.getElementById("myP");

const matrix = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
];

// display 2d array as grid
for (let row of matrix) {
  const rowString = row.join(' ');
  console.log(rowString);
}

// access individual elements
console.log(matrix[1][1]);    //output: 5

// tic-tac-toe
matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';

matrix[2][0] = 'X';
matrix[2][1] = 'O';
matrix[2][2] = 'X';

// display: X wins ... twice
for (let row of matrix) {
  const rowString = row.join(' ');
  console.log(rowString);
}

// extended array ... phone
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#']
];

// display
for (let row of matrix2) {
  const rowString = row.join(' ');
  console.log(rowString);
}


