function computerPlay() {

    const options = ["rock", "paper", "scissors"];

    //Math.random chooses a random number. Multiply by the array length to get length of the array. Math.floor chooses a random index of the array.
    let chosenOption = options[Math.floor(Math.random() * options.length)];

    checkComputerInput(chosenOption);

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
        playerScore++;
    }
    else if (   //Computer wins
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ) {

        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        computerScore++;
    }

}

function game() {

    playerScore = 0;
    computerScore = 0;

    for (var i = 1; i < 6; i++) {

        document.getElementById('round').textContent = `Round ${i}`;

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

        console.log(`Current Scores: Player: ${playerScore} | Computer: ${computerScore}`);

        let confirmAction = confirm("Continue to the next round?");

        if (confirmAction) {

            console.clear();
            continue;
        }
        else {

            break;
        }

    }

    console.log("The game is over. The player's final score is " + playerScore + " and the computer's final score is " + computerScore + ". Refresh the page to play again.");

}

function animation(selectedButton) {


    console.log(selectedButton);

    const element = document.getElementById('rock-shake');

    element.classList.remove('shake'); // reset animation

    void element.offsetWidth; // trigger reflow
    
    element.classList.add('shake'); // start animation

    checkPlayerInput(selectedButton);

}

function checkPlayerInput(selectedButton) {

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    
    if (selectedButton == "rock") {

        rockButton.classList.add('selected');

        paperButton.classList.add('transparency');
        scissorsButton.classList.add('transparency');
    }
    else if (selectedButton == "paper") {

        paperButton.classList.add('selected');

        rockButton.classList.add('transparency');
        scissorsButton.classList.add('transparency');
    }
    else if (selectedButton == "scissors") {

        scissorsButton.classList.add('selected');

        rockButton.classList.add('transparency');
        paperButton.classList.add('transparency');
    }

    setTimeout(computerPlay, 2100); //  wait for animation to finish

}

function checkComputerInput(selectedButton) {

    const rockButton = document.getElementById('computer-img1');
    const paperButton = document.getElementById('computer-img2');
    const scissorsButton = document.getElementById('computer-img3');
    
    if (selectedButton == "rock") {

        rockButton.classList.add('selected');

        paperButton.classList.add('transparency');
        scissorsButton.classList.add('transparency');
    }
    else if (selectedButton == "paper") {

        paperButton.classList.add('selected');

        rockButton.classList.add('transparency');
        scissorsButton.classList.add('transparency');
    }
    else if (selectedButton == "scissors") {

        scissorsButton.classList.add('selected');

        rockButton.classList.add('transparency');
        paperButton.classList.add('transparency');
    }

}

let playerScore = 0;
let computerScore = 0;

//game(); //    Start the game