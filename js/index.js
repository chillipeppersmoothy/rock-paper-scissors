let result;

let defaultScore = {
    wins: 0,
    losses: 0,
    ties: 0,
};

function calculateComputerMove() {
    const random = Math.ceil(Math.random() * 3);

    switch (random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            break;
    }
}

function validateResulte(userMove) {
    const computerMove = calculateComputerMove();
    let score = JSON.parse(localStorage.getItem("score")) ?? defaultScore;

    if (userMove === "rock") {
        switch (computerMove) {
            case "rock":
                result = "Tie";
                score["ties"]++;
                break;
            case "paper":
                result = "You lose";
                score["losses"]++;
                break;
            case "scissors":
                result = "You win";
                score["wins"]++;
                break;
            default:
                break;
        }
    }

    if (userMove === "paper") {
        switch (computerMove) {
            case "rock":
                result = "You win";
                score["wins"]++;
                break;
            case "paper":
                result = "Tie";
                score["ties"]++;
                break;
            case "scissors":
                result = "You lose";
                score["losses"]++;
                break;
            default:
                break;
        }
    }

    if (userMove === "scissors") {
        switch (computerMove) {
            case "rock":
                result = "You lose";
                score["losses"]++;
                break;
            case "paper":
                result = "You win";
                score["wins"]++;
                break;
            case "scissors":
                result = "Tie";
                score["ties"]++;
                break;
            default:
                break;
        }
    }

    document.body.querySelector(".result").innerHTML = result + "!";
    document.body.querySelector(
        ".both-moves"
    ).innerHTML = `Computer pick <Image src="./images/${computerMove}-emoji.png" class="pick-emoji"> and <Image src="./images/${userMove}-emoji.png" class="pick-emoji"> your pick `;
    document.body.querySelector(
        ".user-score"
    ).innerHTML = `You score is, Wins ${score.wins}, Losses: ${score.losses} and Ties: ${score.ties}.`;
    localStorage.setItem("score", JSON.stringify(score));
}

function resetScore() {
    localStorage.setItem("score", JSON.stringify(defaultScore));
    document.body.querySelector(".result").innerHTML = "";
    document.body.querySelector(".both-moves").innerHTML = "";
    document.body.querySelector(
        ".user-score"
    ).innerHTML = `You score is, Wins 0, Losses: 0 and Ties: 0.`;
}
