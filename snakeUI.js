function drawInitalBoard(game) {
  var gridPixels = gridSizeToPixels(game.gridSize);

  $("#grid").height(gridPixels);
  $("#grid").width(gridPixels);
};


function gridSizeToPixels(gridSize) {
  return gridSize * 10;
}