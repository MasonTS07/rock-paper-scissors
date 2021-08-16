const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const CHOICES = ["Rock", "Paper", "Scissors"];

    const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];

    return random;
}

function playRound(playerSelection) {
    let results;
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    if (playerSelection == computerSelection) {
        results = "Tie Game! You both chose " + computerSelection + "!"; 

        return results;
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        results = "You Win. Rock beats Scissors!";
        playerScore++;

        return results;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        results = "You Win. Scissors beats Paper!";
        playerScore++;

        return results;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        results = "You Win. Paper beats Rock!";
        playerScore++;

        return results;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        results = "You Lose. Rock beats Scissors!";
        computerScore++;

        return results;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        results = "You Lose. Scissors beats Paper!";
        computerScore++;

        return results;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        results = "You Lose. Paper beats Rock!";
        computerScore++;

        return results;
    }
    
}




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results = playRound(button.value);
        document.getElementById('results').innerHTML = results;
        document.getElementById('scores').innerHTML = "Player Score: " + playerScore + " <br>" + "Computer Score: " + computerScore;
        });
});

