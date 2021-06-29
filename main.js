import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameview = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick();
});

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileclicked(tile.dataset.index);
  });
});

function onTileclicked(i) {
  //do something
  game.makeMove(i);
  gameview.updateBoard(game);
}
function onRestartClick() {
  game = new Game();
  gameview.updateBoard(game);
}
gameview.updateBoard(game);
