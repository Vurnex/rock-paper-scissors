function computerPlay() {

    const options = ["rock", "paper", "scissors"];

    //Math.random chooses a random number. Multiply by the array length to get length of the array. Math.floor chooses a random index of the array.
    let chosenOption = options[Math.floor(Math.random() * options.length)];

    computerOption = chosenOption;

    checkComputerInput(computerOption);

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

    playRound(playerOption, computerOption);

    //console.log(`Current Scores: Player: ${playerScore} | Computer: ${computerScore}`);

    document.getElementById('score1').textContent = `Player Score: ${playerScore}`;
    document.getElementById('score2').textContent = `Computer Score: ${computerScore}`;

    continueVisible();


    //console.log("The game is over. The player's final score is " + playerScore + " and the computer's final score is " + computerScore + ". Refresh the page to play again.");

}

function animation() {

    const element = document.getElementById('rock-shake');

    element.classList.remove('shake'); // reset animation

    void element.offsetWidth; // trigger reflow
    
    element.classList.add('shake'); // start animation

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

    game();

}

function resetRound() {

    if (currentRound == 6) {

        document.getElementById('round').textContent = `Round 5 / 5`;
        endGame();
        return;
    }

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    const rockButton2 = document.getElementById('computer-img1');
    const paperButton2 = document.getElementById('computer-img2');
    const scissorsButton2 = document.getElementById('computer-img3');


    rockButton.classList.remove('selected', 'transparency');
    paperButton.classList.remove('selected','transparency');
    scissorsButton.classList.remove('selected','transparency');

    rockButton2.classList.remove('selected', 'transparency');
    paperButton2.classList.remove('selected','transparency');
    scissorsButton2.classList.remove('selected','transparency');

}

function continueVisible() {

    $("#continue-para").toggle();
    $("#continue-btns").toggle();

}

function continueGame(selectedOption) {

    if (selectedOption == "Yes") {

        currentRound++;
        document.getElementById('round').textContent = `Round ${currentRound} / 5`;
        continueVisible();
        resetRound();
    }
    else if (selectedOption == "No") {

        continueVisible();
        endGame();
    }
}

function endGame() {

    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    const rockButton2 = document.getElementById('computer-img1');
    const paperButton2 = document.getElementById('computer-img2');
    const scissorsButton2 = document.getElementById('computer-img3');

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;


    rockButton.classList.add('transparency');
    paperButton.classList.add('transparency');
    scissorsButton.classList.add('transparency');

    rockButton2.classList.add('transparency');
    paperButton2.classList.add('transparency');
    scissorsButton2.classList.add('transparency');

    $("#end-msg").toggle();

    if (playerScore > computerScore) {

        document.getElementById('end-msg').textContent = "The game is over. The Player wins. Refresh the page or press F5 to play again.";

    }
    else if (computerScore > playerScore) {

        document.getElementById('end-msg').textContent = "The game is over. The Computer wins. Refresh the page or press F5 to play again.";

    }
    else if (playerScore == computerScore) {

        document.getElementById('end-msg').textContent = "The game is over. The match was a tie. Refresh the page or press F5 to play again.";
    }


}

function main(selectedButton) {

    playerOption = selectedButton;

    animation();

    checkPlayerInput(playerOption);

}

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
let playerOption = "";
let computerOption ="";

//Make items invisible at start
continueVisible();
$("#end-msg").toggle();