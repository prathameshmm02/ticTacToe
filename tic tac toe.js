turn = "X";
boxes = document.getElementsByClassName("box");
turnDisplay = document.getElementsByTagName("p");
var root = document.documentElement;

for (i = 0; i < 9; i++) {
  boxes[i].addEventListener("click", showTurn);
}
winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function showTurn() {
  if (this.textContent != "") {
    alert("Clicked Box is not empty ;)");
  } else {
    this.textContent = turn;

    document.documentElement.style.setProperty("--turn", turn);
    console.log(
      getComputedStyle(document.documentElement).getPropertyValue("--turn")
    );
    turnDisplay[0].innerHTML = "It's " + turn + "'s turn";
  }
  checkWin();
  if (checkAll()) {
    restart(turn);
  }
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}
function checkAll() {
  for (i = 0; i < 9; i++) {
    if (boxes[i].textContent == "") {
      return false;
    }
  }
  return true;
  console.log(checkAll());
}
function checkWin() {
  for (i = 0; i < 8; i++) {
    var a = boxes[winCondition[i][0]].textContent;
    var b = boxes[winCondition[i][1]].textContent;
    var c = boxes[winCondition[i][2]].textContent;
    if (a == b && b == c && a == "X") {
      alert("Player X wins");
      restart(turn);
    } else if (a == b && b == c && a == "O") {
      alert("Player O wins");
      restart(turn);
    }
  }
}
function restart(x) {
  for (i = 0; i < 9; i++) {
    boxes[i].textContent = "";
  }
  turn = x;
}
