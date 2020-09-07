const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // console.log("ça marche");
        const player = buttons[i].innerHTML;
        // console.log(player);
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;

        let result = "";
        if (player === robot) {
            result = "Equality";
        } else if ((player === "Rock" && robot === "Scissors") || (player === "Paper" && robot === "Rock") || (player === "Scissors" && robot === "Paper")) {
            result = "You Win!";
        } else {
            result = "You Loooooose!";
        }

        document.querySelector(".result").innerHTML =
            `Player : ${player} </br> Robot : ${robot} </br> ${result}`;
    });
}