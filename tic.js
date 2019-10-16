// basic  setup ,varibles represnt 2 players
const user1 = "X";
const user2 = "O";
let score1=0;
let score2=0;
let xvalue = document.querySelector("#xresult");
let ovalue = document.querySelector("#oresult");

let button = document.querySelector(".button-1");

// game boared represented in array
let player1options = [];
let player2options = [];
let spots = document.querySelectorAll(".spot");

//  array for winning options
let winOptions = [
  [spots[0], spots[1], spots[2]],
  [spots[3], spots[4], spots[5]],
  [spots[6], spots[7], spots[8]],
  [spots[0], spots[3], spots[6]],
  [spots[1], spots[4], spots[7]],
  [spots[2], spots[5], spots[8]],
  [spots[0], spots[4], spots[8]],
  [spots[2], spots[4], spots[6]]
];

console.log(winOptions);
console.log(spots);
let count = 0;

// function to end the game ,prevent the user to click again or do any moves

const gameOver = function(winner) {
  for (let i = 0; i < spots.length; i++) {
    spots[i].removeEventListener("click", clickBoard);
  }
  if (winner == user1){
    setTimeout(() => {
      score1++;
      alert("X is the winner "+score1+" time");
      xvalue.innerText = score1;

    }, 500);
   }
  if (winner == user2){
    setTimeout(() => {
      score2++;
      alert("O is the winner" +score2+" time");
      ovalue.innerText = score2;
    }, 500);
  }
  if (winner == ""){
    setTimeout(() => {
      alert("Its a Tie");
    }, 500);

  }

};

// check the winner through for loop
const checkWin = function() {
  for (let i = 0; i < winOptions.length; i++) {
    if (
      winOptions[i][0].innerText == "X" &&
      winOptions[i][1].innerText == "X" &&
      winOptions[i][2].innerText == "X"
    ) {
      // winOptions[i][0].style.backgroundColor = 'red';
      // winOptions[i][1].style.backgroundColor = 'red';
      // winOptions[i][2].style.backgroundColor = 'red';

      return gameOver(user1);
    } else if (
      winOptions[i][0].innerText == "O" &&
      winOptions[i][1].innerText == "O" &&
      winOptions[i][2].innerText == "O"
    ) {
      // winOptions[i][0].style.backgroundColor = 'red';
      // winOptions[i][1].style.backgroundColor = 'red';
      // winOptions[i][2].style.backgroundColor = 'red';
      return gameOver(user2);
    }
  }
  if (count == 9) {
    return gameOver("");
  }
};

function clickBoard() {
  // to prevent user to over write options when click on the board
  this.removeEventListener("click", clickBoard);
  this.classList.add("clicked"); // Click on the checkbox

  count++;
  console.log(count);
  // condtion to make the 1st player take the turn once (o) and switch to the other player
  if (count % 2 == 0) {
    this.textContent = user1;

    // store the O's player options in array
    player1options.push(this.id);

    //switch to the other player (x)
  }
  if (count % 2 != 0) {
    this.textContent = user2;
    // store the x's player options in array
    player2options.push(this.id);
  }
  // call the function check winner
  checkWin();
}

//changing the color of the box when it go over
function hoverEvent() {
  this.classList.add("gray");
}

function srartGame() {
  console.log("start game");
  count = 0;
  for (let i = 0; i < spots.length; i++) {
    spots[i].addEventListener("click", clickBoard);
    spots[i].textContent = "";
    spots[i].addEventListener("mouseover", hoverEvent);
  }
}

srartGame();
button.addEventListener("click", srartGame);
