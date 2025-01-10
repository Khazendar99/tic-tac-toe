//  Elements Selectors and variables
const gameDivs = document.querySelectorAll(".main div");
const xScore = document.querySelector(".xo .xScore");
const oScore = document.querySelector(".xo .yScore");
const restartScoreButton = document.querySelector("#restartScore");
const firstAudio = document.querySelector("#audio-1");
const secondAudio = document.querySelector("#audio-2");
let gameCounter = 1;
let xCounter = 0;
let oCounter = 0;

restartScoreButton.addEventListener("click", () => {
  xCounter = 0;
  oCounter = 0;
  xScore.innerText = `X:${xCounter}`;
  oScore.innerText = `O:${oCounter}`;
});
// Game main function
gameDivs.forEach((el) => {
  el.style =
    "display: flex; align-items: center; justify-content: center; font-size: 4rem";
});
gameDivs.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.innerText == "") {
      firstAudio.currentTime = 0;
      firstAudio.play();
      if (gameCounter == 1) {
        el.innerText = "X";
        gameCounter++;
      } else {
        el.innerText = "O";
        gameCounter--;
      }
    }
    if (
      (gameDivs[0].innerText == "X" &&
        gameDivs[4].innerText == "X" &&
        gameDivs[8].innerText == "X") ||
      (gameDivs[0].innerText == "X" &&
        gameDivs[1].innerText == "X" &&
        gameDivs[2].innerText == "X") ||
      (gameDivs[2].innerText == "X" &&
        gameDivs[4].innerText == "X" &&
        gameDivs[6].innerText == "X") ||
      (gameDivs[3].innerText == "X" &&
        gameDivs[4].innerText == "X" &&
        gameDivs[5].innerText == "X") ||
      (gameDivs[6].innerText == "X" &&
        gameDivs[7].innerText == "X" &&
        gameDivs[8].innerText == "X") ||
      (gameDivs[0].innerText == "X" &&
        gameDivs[3].innerText == "X" &&
        gameDivs[6].innerText == "X") ||
      (gameDivs[1].innerText == "X" &&
        gameDivs[4].innerText == "X" &&
        gameDivs[7].innerText == "X") ||
      (gameDivs[2].innerText == "X" &&
        gameDivs[5].innerText == "X" &&
        gameDivs[8].innerText == "X")
    ) {
      secondAudio.currentTime = 0;
      secondAudio.play();
      alert("X Wins");
      for (i = 0; i < gameDivs.length; i++) {
        gameDivs[i].innerText = "";
      }
      xCounter++;
      xScore.innerText = `X: ${xCounter}`;
    } else if (
      (gameDivs[0].innerText == "O" &&
        gameDivs[4].innerText == "O" &&
        gameDivs[8].innerText == "O") ||
      (gameDivs[0].innerText == "O" &&
        gameDivs[1].innerText == "O" &&
        gameDivs[2].innerText == "O") ||
      (gameDivs[2].innerText == "O" &&
        gameDivs[4].innerText == "O" &&
        gameDivs[6].innerText == "O") ||
      (gameDivs[3].innerText == "O" &&
        gameDivs[4].innerText == "O" &&
        gameDivs[5].innerText == "O") ||
      (gameDivs[6].innerText == "O" &&
        gameDivs[7].innerText == "O" &&
        gameDivs[8].innerText == "O") ||
      (gameDivs[0].innerText == "O" &&
        gameDivs[3].innerText == "O" &&
        gameDivs[6].innerText == "O") ||
      (gameDivs[1].innerText == "O" &&
        gameDivs[4].innerText == "O" &&
        gameDivs[7].innerText == "O") ||
      (gameDivs[2].innerText == "O" &&
        gameDivs[5].innerText == "O" &&
        gameDivs[8].innerText == "O")
    ) {
      secondAudio.currentTime = 0;
      secondAudio.play();
      alert("O Wins");
      for (i = 0; i < gameDivs.length; i++) {
        gameDivs[i].innerText = "";
      }
      oCounter++;
      oScore.innerText = `O:${oCounter}`;
    } else if (
      (gameDivs[0].innerText == "X" || gameDivs[0].innerText == "O") &&
      (gameDivs[1].innerText == "X" || gameDivs[1].innerText == "O") &&
      (gameDivs[2].innerText == "X" || gameDivs[2].innerText == "O") &&
      (gameDivs[3].innerText == "X" || gameDivs[3].innerText == "O") &&
      (gameDivs[4].innerText == "X" || gameDivs[4].innerText == "O") &&
      (gameDivs[5].innerText == "X" || gameDivs[5].innerText == "O") &&
      (gameDivs[6].innerText == "X" || gameDivs[6].innerText == "O") &&
      (gameDivs[7].innerText == "X" || gameDivs[7].innerText == "O") &&
      (gameDivs[8].innerText == "X" || gameDivs[8].innerText == "O")
    ) {
      alert("No one wins");
      for (i = 0; i < gameDivs.length; i++) {
        gameDivs[i].innerText = "";
      }
    }
  });
});
