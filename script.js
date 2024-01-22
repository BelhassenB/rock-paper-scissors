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

//Create function that will ask for the player choice (Case Sensitive)
function getPlayerChoice () {

    const playerInput = prompt("Make your choice: Rock, Paper or Scissors", "")  
    const playerInputLowC = (playerInput.slice(1)).toLowerCase();
    const playerChoice = playerInput[0].toUpperCase() + playerInputLowC;

        return playerChoice;
}

let playerScore = 0;
let computerScore = 0;

    
//Create function to start a game and compare the computer seelction with the player selection
function playRound (playerSelection, computerSelection) {       
    
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Rock" ) {
            computerScore++; return `Computer Choice: ${computerSelection}, Your choice is: ${playerSelection}, You Lost!\n
            Computer Score: ${computerScore}`           

    } else if (playerSelection === computerSelection ) {        
        return `It\'s a tie! Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection}`; 

    } else {
        playerScore++; return `Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection} You Won! \n
        Player Score: ${playerScore}`;
        
    }
}

//Create function to play severeal rounds based on a loop
function game () {    

    for (let i=0; i < 5; i++) 
    console.log(playRound(getPlayerChoice(),getComputerChoice()));

    let finalScore = (playerScore > computerScore)? `You won: ${playerScore} to ${computerScore}`: `You lost: ${playerScore} to ${computerScore}`
    alert(finalScore);

} 
game();























/* 
Play the round 1, adds 1 to ties
*/