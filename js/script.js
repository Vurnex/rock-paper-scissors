function computerPlay() {

    const options = ["rock", "paper", "scissors"];

    //Math.random chooses a random number. Multiply by the array length to get length of the array. Math.floor chooses a random index.
    let chosenOption = options[Math.floor(Math.random() * options.length)];

    return chosenOption;
}

function playRound(playerSelection, computerSelection) {
    
    //Both selections are the same
    if (
        (playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")  
    ) {

        console.log("This match was a tie.");
    }
    else if (   //Player wins  
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {

        console.log("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (   //Computer wins
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ) {

        console.log("You lose! " + computerSelection + " beats " + playerSelection);
    }

}

function game() {

    for (var i = 1; i < 6; i++) {

        console.log("Round " + i);

        let playerSelection = prompt("Enter rock, paper, or scissors");
        let computerSelection = computerPlay();

        //Input Validation
        if (playerSelection == null) {

            game();
        }

        let correctedSelection = playerSelection.toLowerCase();

        //Input Validation
        if (correctedSelection !== "rock" && correctedSelection !== "paper" && correctedSelection !== "scissors") {
    
            alert("You must enter one of the correct options.");
            console.clear();
            game();
        }

        console.log("The player chose " + correctedSelection + ". The computer chose " + computerSelection);

        playRound(correctedSelection, computerSelection);

        let confirmAction = confirm("Continue to the next round?");

        if (confirmAction) {

            
            console.clear();
            continue;
        }
        else {
            console.log("The game has ended.");
            break;
        }

    }

}

game(); //Start the game

