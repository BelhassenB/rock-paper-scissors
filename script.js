//Create function that will randomly return Rock, Paper or Scissors
function getComputerChoice () {

    const compChoice = Math.floor(Math.random()*4);

    if (compChoice <= 1) {
        return "Rock";
    } else if (1 < compChoice && compChoice <= 2) {
        return "Paper";
    } else {
        return "Scissors";
    }    
    
}

//Create function that will ask for the player choice
function getPlayerChoice () {

    const playerInput = prompt("Make your choice: Rock, Paper or Scissors", "")  
    const playerInputLowC = (playerInput.slice(1)).toLowerCase();
    const playerChoice = playerInput[0].toUpperCase() + playerInputLowC;

        return playerChoice;
}

    
//Create function to start a game and compare the computer seelction with the player selection
function gameStart (playerSelection, computerSelection) {    
    
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Rock" ) {
            return `Computer Choice: ${computerSelection}, Your choice is: ${playerSelection}, You Lost!`;
    } else if (playerSelection === computerSelection ) {        
        return `It\'s a tie! Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection}`;        
    } else {
        return `Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection} You Won!`;
    }
}
console.log(gameStart(getPlayerChoice(), getComputerChoice()))











/* 
create variables for rock, paper, and scissors
create a variable for rounds ( add +1 for every round played, till 3 rounds )
prompt a message to ask for my choice
put my choice in the variable
create function for computer choice and compare it with my choice ( add messages for every round lost or won or tie)
*/