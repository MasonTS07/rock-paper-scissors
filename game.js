function computerPlay() {
    const CHOICES = ["Rock", "Paper", "Scissors"];

    const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    console.log(random);

    return random;

}

function playRound(playerSelection, computerSelection) {
    let results;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        results = "Tie Game!"

        return results;
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        results = "You Win. Rock beats Scissors!";

        return results;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        results = "You Win. Scissors beats Paper!";

        return results;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        results = "You Win. Paper beats Rock!";

        return results;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        results = "You Lose. Rock beats Scissors!";

        return results;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        results = "You Lose. Scissors beats Paper!";

        return results;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        results = "You Lose. Paper beats Rock!";

        return results;
    }

}
const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


