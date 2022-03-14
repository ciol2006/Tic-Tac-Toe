export default class Logic {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    this.turn = this.turn === "X" ? "O" : "X";
  }

  selectTile(i) {
    if (this.board[i]) {
      return;
    }
    this.board[i] = this.turn;
    this.nextTurn();
  }
}
