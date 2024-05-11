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
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
        default:
            break;
    }
}

function validateResulte(userMove) {
    const computerMove = calculateComputerMove();
    let score = JSON.parse(localStorage.getItem("score")) ?? defaultScore;

    if (userMove === "Rock") {
        switch (computerMove) {
            case "Rock":
                result = "Tie";
                score["ties"]++;
                break;
            case "Paper":
                result = "You lose";
                score["losses"]++;
                break;
            case "Scissor":
                result = "You win";
                score["wins"]++;
                break;
            default:
                break;
        }
    }

    if (userMove === "Paper") {
        switch (computerMove) {
            case "Rock":
                result = "You win";
                score["wins"]++;
                break;
            case "Paper":
                result = "Tie";
                score["ties"]++;
                break;
            case "Scissor":
                result = "You lose";
                score["losses"]++;
                break;
            default:
                break;
        }
    }

    if (userMove === "Scissor") {
        switch (computerMove) {
            case "Rock":
                result = "You lose";
                score["losses"]++;
                break;
            case "Paper":
                result = "You win";
                score["wins"]++;
                break;
            case "Scissor":
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
    ).innerHTML = `Computer picked ${computerMove} and you picked ${userMove}`;
    localStorage.setItem("score", JSON.stringify(score));
    document.body.querySelector(
        ".user-score"
    ).innerHTML = `You score is, total wins ${score.wins}, losses: ${score.losses} and ties: ${score.ties}.`;
}

function resetScore() {
    localStorage.setItem("score", JSON.stringify(defaultScore));
    document.body.querySelector(".result").innerHTML = "";
    document.body.querySelector(".both-moves").innerHTML = "";
    document.body.querySelector(
        ".user-score"
    ).innerHTML = `You score is, total wins 0, losses: 0 and ties: 0.`;
}
