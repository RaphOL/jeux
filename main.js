// je n'ai plus de bouton
// définir à quoi correspondent les touches
// lier les touches au player 1 et PLayer 2
// les conditions
// résultats

// window.onkeyup = (evt) => {
//     if (evt.keyCode === 37) {
//         success(stealYourEnnemy);

const buttons = document.querySelectorAll(".buttons");
const equality = document.getElementById("equality");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const imagePlayer = document.getElementById("a");
const imageRobot = document.getElementById("b");
let scorePlayer = 0;
let scoreComputer = 0;

window.onload = setButton();

function setButton() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const player = buttons[i].innerHTML;
      const robot =
        buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
      setImagePlayer(player, imagePlayer);
      setImageRobot(robot, imageRobot);
      setResult(player, robot);
    });
  }
}

function setImagePlayer(player, imagePlayer) {
  if (player === "Rock") {
    imagePlayer.setAttribute("src", "./images/rock.png");
  } else if (player === "Paper") {
    imagePlayer.setAttribute("src", "./images/paper.png");
  } else if (player === "Scissors") {
    imagePlayer.setAttribute("src", "./images/scissors.png");
  }
}

function setImageRobot(robot, imageRobot) {
  if (robot === "Rock") {
    imageRobot.setAttribute("src", "./images/rock.png");
  } else if (robot === "Paper") {
    imageRobot.setAttribute("src", "./images/paper.png");
  } else if (robot === "Scissors") {
    imageRobot.setAttribute("src", "./images/scissors.png");
  }
}

function setResult(player, robot) {
  let result = "";
  if (player === robot) {
    result = "Equality!";
    equality.play();
    end(result);
  } else if (
    (player === "Rock" && robot === "Scissors") ||
    (player === "Paper" && robot === "Rock") ||
    (player === "Scissors" && robot === "Paper")
  ) {
    result = "You Win!";
    scorePlayer++;
    updateScore();
    win.play();
    end(result);
  } else {
    result = "You Loooooose!";
    scoreComputer++;
    updateScore();
    lose.play();
    end(result);
  }

  document.querySelector(
    "#resultContainer"
  ).innerHTML = `<div class="result">${result}</div>`;
}

function updateScore() {
  let scoreP = document.getElementById("sPlayer");
  let scoreC = document.getElementById("sComputer");
  scoreP.textContent = scorePlayer;
  scoreC.textContent = scoreComputer;
}

function end(result) {
  if (scorePlayer === 3 || scoreComputer === 3) {
    const endT = document.getElementById("endText");
    endT.style.visibility = "visible";
    endT.innerHTML = `${result} </br> End of the game`;
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}

function start() {
  const startBtn = document.getElementById("startButton");
  const divStart = document.getElementById("start");
  const inputField = document.getElementById("name");

  startBtn.addEventListener("click", function clickHandler() {
    divStart.style.visibility = "hidden";
  });
  inputField.oninput = function recupValue(event) {
    console.log(event.target.value);
    document.querySelector("#playerName").innerHTML = event.target.value;
  };
}

start();
