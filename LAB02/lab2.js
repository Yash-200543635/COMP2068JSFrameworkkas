//student name : Yash Sharma
//Student Id : 200543635


// First we bring in the 'prompt' thingy to get user input
const prompt = require('prompt');

// This starts the prompt so it can ask the user stuff
prompt.start();

// Now we ask the user to pick either Rock, Paper, or Scissors
prompt.get(['userSelection'], function (err, result) {
    if (err) {
        // Oops, something went wrong. print the error
        return console.error(err);
    }
    
    
    // Okay, we got the user's choice, let's make it all caps to make it easier to compare
    let userSelection = result.userSelection.toUpperCase();

    // Time to make the computer pick something randomly
    let random = Math.random();
    let computerSelection;

    // If the number is small, it's Paper; if it's medium, it's Scissors; otherwise, it's Rock
    if (random <= 0.34) {
        computerSelection = 'PAPER';
    } else if (random <= 0.67) {
        computerSelection = 'SCISSORS';
    } else {
        computerSelection = 'ROCK';
    }

    // Show the user what they and the computer picked
    console.log(`User selection: ${userSelection}`);
    console.log(`Computer selection: ${computerSelection}`);

    // Now let's figure out who won
    if (userSelection === computerSelection) {
        console.log("It's a tie! No winner this time.");
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        // If the user beats the computer, print this
        console.log('User Wins! Yay!');
    } else {
        // If the computer wins, well, print this
        console.log('Computer Wins! Better luck next time.');
    }
});
