const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // console.log("ça marche");
        const player = buttons[i].innerHTML;
        const imagePlayer = document.getElementById("a");
        const imageRobot = document.getElementById("b");

        if (player === "Rock") {
            imagePlayer.setAttribute("src", "./rock.png");
        } else if (player === "Paper") {
            imagePlayer.setAttribute("src", "./paper.png");
        } else if (player === "Scissors") {
            imagePlayer.setAttribute("src", "./scissors.png");
        }
        // console.log(player);
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;

        if (robot === "Rock") {
            imageRobot.setAttribute("src", "./rock.png");
        } else if (robot === "Paper") {
            imageRobot.setAttribute("src", "./paper.png");
        } else if (robot === "Scissors") {
            imageRobot.setAttribute("src", "./scissors.png");
        }

        let result = "";
        if (player === robot) {
            result = "Equality";
        } else if ((player === "Rock" && robot === "Scissors") || (player === "Paper" && robot === "Rock") || (player === "Scissors" && robot === "Paper")) {
            result = "You Win!";
        } else {
            result = "You Loooooose!";
        }

        document.querySelector(".result").innerHTML =
            `${result}`;
    });
}