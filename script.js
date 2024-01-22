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


    
//Create function to start a game and compare the computer seelction with the player selection
function playRound (playerSelection, computerSelection) {  

    let playerScore = 0;
    let playerWin = playerScore + 1;
    let computerScore = 0;
    let computerWin = ++computerScore; 
      
    
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Rock" ) {
            return `Computer Choice: ${computerSelection}, Your choice is: ${playerSelection}, You Lost! \n
            Computer Score : ${computerWin}`;            

    } else if (playerSelection === computerSelection ) {        
        return `It\'s a tie! Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection}`; 

    } else {
        return `Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection} You Won!`;
        
    }
}

//Create function to play severeal rounds based on a loop
function game () {
    for (let i=0; i<10; i++)
    console.log(playRound("Rock", "Paper"));    

} 
game();























/* 
Play the round 1, adds 1 to ties
*/