// board stuff
function initializeBoard(size){
  var grid = [];
  // Build out columns
  for (var i = 0; i < size; i++) {
    var row = new Array(size);
    grid.push(row);
  };
  return grid;
};

// snake stuff
function initializeSnake() {
  return {
    direction: "East",
    location: { row: 0, col: 0},
    turn: function turn(dir) {
      this.direction = dir;
    },
    move: function move() {
      switch (this.direction) {
        case "North":
          this.location.row = this.location.row - 1;
          break;
        case "East":
          this.location.col = this.location.col + 1;
          break;
        case "South":
          this.location.row = this.location.row + 1;
          break;
        case "West":
          this.location.col = this.location.col - 1;
          break;
      };
    }
  };
};

// game stuff
function snakeGame(gridSize) {
  var board = initializeBoard(gridSize);
  var snake =  initializeSnake();
  var step = function(){
    snake.move();
  };

  function gameOver() {
    return snake.location.row < 0 || snake.location.row > (gridSize - 1) ||
           snake.location.col < 0 || snake.location.col > (gridSize - 1);

  };

  return {
    board: board,
    snake: snake,
    step: step,
    gameOver: gameOver,
    gridSize: gridSize
  };
}


// // node stuff
// module.exports = {
//   snakeGame: snakeGame
// };