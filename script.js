let playerScore = 0;
let computerScore = 0;

const paperBtn = document.createElement('button')
paperBtn.textContent = "Paper"
const rockBtn = document.createElement('button')
rockBtn.textContent = "Rock"
const scissorBtn = document.createElement('button')
scissorBtn.textContent = "Scissors"
const div1 = document.createElement('div')
div1.style.border = "2px solid black"
div1.style.height = "200px"
div1.style.textAlign = "center"

const divPlayerScore = document.createElement('div')
divPlayerScore.textContent = "Player Score : " 

const divComputerScore = document.createElement('div')
divComputerScore.textContent = "Computer Score : "


const div2 = document.createElement('div')

div2.style.height = "100px"
div2.style.textAlign = "center"


const body = document.querySelector('body')

body.appendChild(paperBtn)
body.appendChild(rockBtn)
body.appendChild(scissorBtn)
body.appendChild(div1)
div1.appendChild(divPlayerScore)
div1.appendChild(divComputerScore)
body.appendChild(div2)

const allButtons = document.querySelectorAll('button')

allButtons.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        const playerChoice = e.target.textContent   
        playRound(`${playerChoice}`, getComputerChoice())       

        

    })
})  


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

//Create function to start a game and compare the computer selection with the player selection
function playRound (playerSelection, computerSelection) {     
    
    
    while (computerScore < 5 && playerScore < 5) {
        if (playerSelection === "Rock" && computerSelection === "Paper" ||
            playerSelection === "Paper" && computerSelection === "Scissors" || 
            playerSelection === "Scissors" && computerSelection === "Rock" ) {
            divComputerScore.textContent = "Computer Score : " + ++computerScore;
            return div2.textContent = `Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection} You lost!`       
        } else if (playerSelection === computerSelection ) {        
        return div2.textContent = `It\'s a tie! Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection}`
        } else {
        divPlayerScore.textContent = "Player Score : " + ++playerScore;
        return div2.textContent = `Computer Choice is: ${computerSelection}, Your choice is: ${playerSelection} You Won!`
        }
    }

    if (playerScore > computerScore) {
        div2.style.color = "green"
        div2.style.fontWeight = "bold"
        div2.style.fontSize = "22px"
        return div2.textContent = `You won ! Final score is ${playerScore}:${computerScore}`
    }
    else {
        div2.style.color = "red"
        div2.style.fontWeight = "bold"
        div2.style.fontSize = "22px"
        return div2.textContent = `You lost ! Final score is ${playerScore}:${computerScore}`
    }


    
} 
