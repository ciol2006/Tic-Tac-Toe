export default class Logic {
  constructor() {
    this.playerTag = "X";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    this.playerTag = this.playerTag === "X" ? "O" : "X";
  }

  selectTile(i) {
    if (!this.stillPlaying()) {
      return;
    }

    if (this.board[i]) {
      return;
    }

    this.board[i] = this.playerTag;

    if (!this.winningCombination()) {
      this.nextTurn();
    }
  }

  onTileClick(i) {
    this.selectTile(i);
    console.log(this.board);
  }

  winningCombination() {
    const wayToWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of wayToWin) {
      const [a, b, c] = combination;

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[b] === this.board[c]
      ) {
        return combination;
      }
    }

    return null;
  }

  stillPlaying() {
    return this.board.includes(null) && !this.winningCombination();
  }

  hoverText() {
    tiles.forEach((tile) => {
      tile.classList.remove("X_hover");
      tile.classList.remove("O_hover");
      if (tile.innerText == "") {
        tile.classList.add(`${this.playerTag}_hover`);
      }
    });
  }
}
