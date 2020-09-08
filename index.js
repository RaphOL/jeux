const buttons = document.querySelectorAll("button");
const equality = document.getElementById("equality");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
const imagePlayer = document.getElementById("a");
const imageRobot = document.getElementById("b");

window.onload = setButton();
//logique de deuxième manche
//lancerDeuxiemeManche() {
//    setButton();
//}

function setButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            const player = buttons[i].innerHTML;
            setImagePlayer(player, imagePlayer);
            setImageRobot(robot, imageRobot);
            setResult(player, robot);
        });
    }
}

function setImagePlayer(player, imagePlayer) {
    if (player === "Rock") {
        imagePlayer.setAttribute("src", "./rock.png");
    } else if (player === "Paper") {
        imagePlayer.setAttribute("src", "./paper.png");
    } else if (player === "Scissors") {
        imagePlayer.setAttribute("src", "./scissors.png");
    }
}

function setImageRobot(robot, imageRobot) {
    if (robot === "Rock") {
        imageRobot.setAttribute("src", "./rock.png");
    } else if (robot === "Paper") {
        imageRobot.setAttribute("src", "./paper.png");
    } else if (robot === "Scissors") {
        imageRobot.setAttribute("src", "./scissors.png");
    }
}

function setResult(player, robot) {
    let result = "";
    if (player === robot) {
        result = "Equality";
        // equality.play();
    } else if ((player === "Rock" && robot === "Scissors") || (player === "Paper" && robot === "Rock") || (player === "Scissors" && robot === "Paper")) {
        result = "You Win!";
        // win.play();
    } else {
        result = "You Loooooose!";
        // lose.play();
    }

    document.querySelector("#resultContainer").innerHTML =
        `<div class="result">${result}</div>`;
}