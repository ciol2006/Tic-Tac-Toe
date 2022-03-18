import Logic from "./Logic.js";

const tiles = document.querySelectorAll(".tile");
let game = new Logic();

function move() {
  tiles.forEach((tile) =>
    tile.addEventListener("click", (i) => {
      if (game.onTileClick) {
        if (game.board[tile.dataset.index]) {
          return;
        }
        if (!game.stillPlaying()) {
          return;
        }
        tile.innerText = game.playerTag;
        game.onTileClick(tile.dataset.index);

        //display who's turn it is.
        document.querySelector(
          ".playerTurn"
        ).textContent = `${game.playerTag}'s turn`;

        //hover text
        hoverText();

        //winner action

        // Display for the winner.
        if (game.winningCombination()) {
          document.querySelector(
            ".winner"
          ).textContent = `${game.playerTag} is the winner !!!`;
          return;
        }
        //Display for tie.
        if (!game.board.includes(null)) {
          document.querySelector(".winner").textContent = "It's a Tie";
        }
      }
    })
  );
}

function hoverText() {
  tiles.forEach((tile) => {
    tile.classList.remove("X_hover");
    tile.classList.remove("O_hover");
    if (game.winningCombination()) {
      return;
    }
    if (tile.innerText == "") {
      tile.classList.add(`${game.playerTag}_hover`);
    }
  });
}

function gameStart() {
  hoverText();
  move();
}

function onRestart() {
  document.querySelector(".restart").addEventListener("click", () => {
    document.querySelector(".winner").textContent = "";
    document.querySelectorAll(".tile").textContent = " ";
    document.querySelector(".playerTurn").textContent = `X's turn`;
    tiles.forEach((tile) => {
      tile.textContent = "";
    });
    game = new Logic();
    hoverText();
  });
}

gameStart();
onRestart();
