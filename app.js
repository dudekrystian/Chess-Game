const gameBoard = document.querySelector("#gameboard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");
const width = 8;

const startPieces = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
];

function createBoard() {
  startPieces.forEach((startPiece, index) => {
    const square = document.createElement("div");
    square.innerHTML = startPiece;
    square.classList.add("square");
    square.setAttribute("square-id", index);
    const row = Math.floor((63 - index) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(index % 2 === 0 ? "beige" : "brown");
    } else {
      square.classList.add(index % 2 === 0 ? "brown" : "beige");
    }

    if (index <= 15) {
      square.firstChild.firstChild.classList.add("black");
    }
    if (index >= 48) {
      square.firstChild.firstChild.classList.add("white");
    }
    gameBoard.append(square);
  });
}

createBoard();
