var Snake = require('./snake');
function s(game) { console.log(game) };

var game = Snake.snakeGame(10);

s(game.board);