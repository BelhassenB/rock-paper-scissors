function getComputerChoice () {
    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"
    const compChoice = Math.floor(Math.random()*4);

    if (compChoice <= 1) {
        return rock;
    } else if (1 < compChoice && compChoice <= 2) {
        return paper;
    } else {
        return scissors;
    }
    
}

console.log(getComputerChoice())



/* 
create variables for rock, paper, and scissors
create a variable for rounds ( add +1 for every round played, till 3 rounds )
prompt a message to ask for my choice
put my choice in the variable
create function for computer choice and compare it with my choice ( add messages for every round lost or won or tie)
*/