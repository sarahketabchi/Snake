function snakeGame(gridSize) {
  var board = initializeBoard(gridSize);


  function initializeBoard(size){
    var grid = [];
    // Build out columns
    for (var i = 0; i < size; i++) {
      var row = new Array(size);
      grid.push(row);
    };
    return grid;
  };

  return {
    board: board
  };
}

module.exports = {
  snakeGame: snakeGame
};