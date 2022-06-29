function computerPlay() {

    const options = ["rock", "paper", "scissors"];

    //Math.random chooses a random number. Multiply by the array length to get length of the array. Math.floor chooses a random index.
    let chosenOption = options[Math.floor(Math.random() * options.length)];

    console.log(chosenOption);

    return chosenOption;
}

function playRound(playerSelection, computerSelection) {

    let inputCorrection = playerSelection.toLowerCase();
    
    //Both selections are the same
    if (
        (inputCorrection == "rock" && computerSelection == "rock") ||
        (inputCorrection == "paper" && computerSelection == "paper") ||
        (inputCorrection == "scissors" && computerSelection == "scissors")  
    ) {

        console.log("This match was a tie.");
    }
    else if (   //Player wins  
        (inputCorrection == "rock" && computerSelection == "scissors") ||
        (inputCorrection == "paper" && computerSelection == "rock") ||
        (inputCorrection == "scissors" && computerSelection == "paper")
    ) {

        console.log("You win! " + inputCorrection + " beats " + computerSelection);
    }
    else if (   //Computer wins
        (computerSelection == "rock" && inputCorrection == "scissors") ||
        (computerSelection == "paper" && inputCorrection == "rock") ||
        (computerSelection == "scissors" && inputCorrection == "paper")
    ) {

        console.log("You lose! " + computerSelection + " beats " + inputCorrection);
    }

}

let playerSelection = prompt("Enter rock, paper, or scissors");
const computerSelection = computerPlay();

playRound(playerSelection, computerSelection);