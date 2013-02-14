$(document).ready(function() {
  $('#start').click(function(){
    event.preventDefault();
    var size = prompt("How big do you want it?");
    play(size);
  });
});

function drawInitalBoard(gridSize) {
  var gridPixels = squaresToPixels(gridSize);

  $("#grid").height(gridPixels);
  $("#grid").width(gridPixels);
};

function squaresToPixels(num) {
  return num * 10;
}

function moveSnake(snake) {
  var topPos = squaresToPixels(snake.location.row);
  var leftPos = squaresToPixels(snake.location.col);

  $("#snake").stop().animate({'top': topPos, 'left': leftPos}, 250);
}

function play(size) {
  var game = snakeGame(size);
  drawInitalBoard(game.gridSize);
  gameStep();

  $('html').keydown(function(event) {
    switch (event.keyCode) {
      case 38: // Up
        game.snake.turn("North");
        break;
      case 39: // Right
        game.snake.turn("East");
        break;
      case 40: // Down
        game.snake.turn("South");
        break;
      case 37: // Left
        game.snake.turn("West");
        break;
    };
  });

  // until game ends run gameStep function
  function gameStep (){
    game.step();
    moveSnake(game.snake);
    if (!game.gameOver()) { timer(); };
  };

  function timer(){
    window.setTimeout(gameStep, 250);
  };
}


