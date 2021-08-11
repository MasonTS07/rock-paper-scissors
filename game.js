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

function game() {
    let games = 1;
    let playerScore = 0;
    let computerScore = 0;
    let message = "Please Choose Rock, Paper, or Scissors.";
    let defaultmsg = "Testing";
    

    do {
        let playerSelection = window.prompt(message, defaultmsg);
        let computerSelection = computerPlay();
        results = playRound(playerSelection, computerSelection);

        if (results == "You Win. Scissors beats Paper!" || results == "You Win. Rock beats Scissors!" || results == "You Win. Paper beats Rock!") {
            playerScore = playerScore + 1;
            console.log(playRound(playerSelection, computerSelection));
            console.log("You Win Round " + games + "!")
            console.log("The score is: " + playerScore + " - " + computerScore);
        }

        else if (results == "You Lose. Scissors beats Paper!" || results == "You Lose. Rock beats Scissors!" || results == "You Lose. Paper beats Rock!"){
            computerScore = computerScore + 1;
            console.log(playRound(playerSelection, computerSelection));
            console.log("You Lose Round " + games + "!");
            console.log("The score is: " + playerScore + " - " + computerScore);
        }

        else {
            console.log("You Tied. No Points Added.")
            console.log("The score is: " + playerScore + " - " + computerScore);
        }

        games = games + 1;
    }
    while (games < 6)

}

game();


