const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let computerScore = 0;
let playerScore = 0;
let gameOver = false;

const loseSound = new Audio('loseSound.mp4');
const winSound = new Audio('winSound.mp4');



function playGame(playerChoice){
    if(gameOver) return;

    const computerChoice = choices[(Math.floor(Math.random() * 3))];
    // console.log(computerChoice);

    let result = ""

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    } else if(playerChoice === 'rock' && computerChoice === 'scissors' 
        || playerChoice === 'paper' && computerChoice === 'rock'
        || playerChoice === 'scissors' && computerChoice === 'paper'
    ){
        result = "YOU WIN!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else{
        result = "YOU LOSE!";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    playerDisplay.textContent = `Your choice: ${playerChoice}`;
    computerDisplay.textContent = `Computer's choice: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");

    if(result === "YOU WIN!"){
        resultDisplay.classList.add("greenText");
    } else if(result === "YOU LOSE!"){
        resultDisplay.classList.add("redText");
    }

    if(playerScore === 5){
        resultDisplay.textContent = "Game Over! You WON!";
        gameOver = true;
        winSound.play();
    } else if(computerScore === 5){
        resultDisplay.textContent = "Game Over! Lanat Tery Ty";
        gameOver = true;
        loseSound.play();
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    gameOver = false;
    resultDisplay.textContent = "LET'S PLAY!";
    resultDisplay.style.fontSize = '1.5rem';

    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;

    playerDisplay.textContent = `Your choice: `;
    computerDisplay.textContent = `Computer's coice: `;

}














// ########################################################
// ########### CONSOLE BASED GAME CODE ####################

// // let computerInput;
// // let humanInput;


// function getComputerInput(){
//     let computerInput = Math.random()

//     if(computerInput <= 0.333){
//         computerInput = "rock";
//     } else if(computerInput <= 0.666){
//         computerInput = "paper";
//     } else{
//         computerInput = "scissors";
//     }
    
//     return computerInput;
// }

// // getComputerInput();

// function getHumanInput(){
//     let humanInput = prompt("Rock, Paper or Scissors?").toLowerCase();

//     if(humanInput !== 'rock' && humanInput !== 'paper' && humanInput !== 'scissors'){
//         while(humanInput !== 'rock' && humanInput !== 'paper' && humanInput !== 'scissors'){
//             humanInput = prompt("Pagal hogya penchod? Rock, Paper, ya Scissors likh").toLowerCase();
//         }
//     } 
//     return humanInput;
// }

// // getHumanInput();





// function playGame(){

//     let humanScore = 0;
//     let computerScore = 0;  

//     function playRound(humanChoice, computerChoice){
//         if(humanChoice === 'rock' && computerChoice === 'scissors' 
//             || humanChoice === 'paper' && computerChoice === 'rock'
//             || humanChoice === 'scissors' && computerChoice === 'paper'
//         ){
//             console.log("You win! " + humanChoice + " beats " + computerChoice);
//             humanScore++;
//          } else if (humanChoice === computerChoice){
//             console.log("Game Tied!")
//          } else{
//             console.log("You lost! " + computerChoice + " beats " + humanChoice);
//             computerScore++;
//          }
//     }



//     for(i=0; i<5; i++){
//         let humanChoice = getHumanInput();
//         let computerChoice = getComputerInput();
//         console.log("Human chose: " + humanChoice);
//         console.log("Computer chose: " + computerChoice);
//         playRound(humanChoice, computerChoice);
//     }

//     console.log("Final Score: Human " + humanScore + " - Computer " + computerScore);    

//     if(humanScore > computerScore){
//         console.log("Congratulations! You won the game!")
//     } else if (computerScore > humanScore){
//         console.log("Sorry, you lost the game.");
//     } else {
//         console.log("It's a tie!");
//     }
// }

// playGame();




// // function playRound(humanChoice, computerChoice){
// //     if(humanChoice === 'rock' && computerChoice === 'scissors' 
// //         || humanChoice === 'paper' && computerChoice === 'rock'
// //         || humanChoice === 'scissors' && computerChoice === 'paper'
// //      ){
// //         console.log("You win! " + humanChoice + " beats " + computerChoice);
// //      } else if (humanChoice === computerChoice){
// //         console.log("Game Tied!")
// //      } else{
// //         console.log("You lost! " + computerChoice + " beats " + humanChoice)
// //      }
// // }

// // let humanChoice = getHumanInput();
// // let computerChoice = getComputerInput();

// // playRound(humanChoice, computerChoice);
