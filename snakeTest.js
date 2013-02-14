var Snake = require('./snake');
function s(game) { console.log(game) };

var game = Snake.snakeGame(10);

// s(game.board);
// s(game.snake.location);
// s(game.snake.direction);
// game.snake.turn("South");
// s(game.snake.direction);
// s(game.snake.location);
// game.snake.move();
// s(game.snake.location);
// game.step();
// s(game.snake.location);


// test gameOver
s(game.snake.location);
game.snake.turn("East");
game.step();
s(game.gameOver());
s(game.snake.location);


