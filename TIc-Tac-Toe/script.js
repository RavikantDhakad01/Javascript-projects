//To start and pause the music
let myAudio = new Audio("music.mp3");
let click = new Audio("ting.mp3");
let music = "pause";
const musicBTN = document.getElementById("music");

musicBTN.addEventListener("click", (e) => {
  if (music === "pause") {
    myAudio.play();
    music = "start";
    musicBTN.innerText = "Mute";
  } else if (music === "start") {
    myAudio.pause();
    music = "pause";
    musicBTN.innerText = "Play🎵";
  }
});

// selectors

let turn = "❌";
let playgame = true;
const msg = document.querySelector("#msg");
const reset = document.getElementById("reset");
const boxes = document.querySelectorAll(".box");

// Game-logic

function changeTurn() {
  if (turn == "❌") {
    return "⭕";
  } else {
    return "❌";
  }
}

function checkwin() {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  0;

  wins.forEach((elements) => {
    if (
      boxes[elements[0]].innerText !== "" &&
      boxes[elements[1]].innerText !== "" &&
      boxes[elements[2]].innerText !== "" &&
      boxes[elements[0]].innerText === boxes[elements[1]].innerText &&
      boxes[elements[1]].innerText === boxes[elements[2]].innerText
    ) {
      msg.innerText = boxes[elements[0]].innerText + " Won 🎉";
      playgame = false;
    }
  });
}
function checkdraw() {
  if (
    boxes[0].innerText != "" &&
    boxes[1].innerText != "" &&
    boxes[2].innerText != "" &&
    boxes[3].innerText != "" &&
    boxes[4].innerText != "" &&
    boxes[5].innerText != "" &&
    boxes[6].innerText != "" &&
    boxes[7].innerText != "" &&
    boxes[8].innerText != ""
  ) {
    msg.innerText='Draw 🦆'
  }
}

Array.from(boxes).forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.innerText == "") {
      if (playgame) {
        click.play();
        e.target.innerText = turn;
        turn = changeTurn();
        checkwin();
      
      }
    }
    if (playgame) {
      msg.innerText = `Turn for ${turn}`;
      checkdraw();
    }
  });
});

reset.addEventListener("click", (e) => {
  playgame = true;

  for (let i = 0; i < 9; i++) {
    boxes[i].innerText = "";
  }

  turn = "❌";
  msg.innerText = "Turn for❌";
});
