function computerPlay() {

    const options = ["Rock", "Paper", "Scissors"];

    let chosenOption = options[Math.floor(Math.random() * options.length)];

    console.log(chosenOption);
}

computerPlay();