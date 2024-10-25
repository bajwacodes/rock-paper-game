// let computerInput;
// let humanInput;


function getComputerInput(){
    let computerInput = Math.random()

    if(computerInput <= 0.333){
        computerInput = "rock";
    } else if(computerInput <= 0.666){
        computerInput = "paper";
    } else{
        computerInput = "scissors";
    }
    
    return computerInput;
}

// getComputerInput();

function getHumanInput(){
    let humanInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    if(humanInput !== 'rock' && humanInput !== 'paper' && humanInput !== 'scissors'){
        while(humanInput !== 'rock' && humanInput !== 'paper' && humanInput !== 'scissors'){
            humanInput = prompt("Pagal hogya penchod? Rock, Paper, ya Scissors likh").toLowerCase();
        }
    } 
    return humanInput;
}

// getHumanInput();





function playGame(){

    let humanScore = 0;
    let computerScore = 0;  

    function playRound(humanChoice, computerChoice){
        if(humanChoice === 'rock' && computerChoice === 'scissors' 
            || humanChoice === 'paper' && computerChoice === 'rock'
            || humanChoice === 'scissors' && computerChoice === 'paper'
        ){
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
         } else if (humanChoice === computerChoice){
            console.log("Game Tied!")
         } else{
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            computerScore++;
         }
    }



    for(i=0; i<5; i++){
        let humanChoice = getHumanInput();
        let computerChoice = getComputerInput();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Score: Human " + humanScore + " - Computer " + computerScore);    

    if(humanScore > computerScore){
        console.log("Congratulations! You won the game!")
    } else if (computerScore > humanScore){
        console.log("Sorry, you lost the game.");
    } else {
        console.log("It's a tie!");
    }
}




// function playRound(humanChoice, computerChoice){
//     if(humanChoice === 'rock' && computerChoice === 'scissors' 
//         || humanChoice === 'paper' && computerChoice === 'rock'
//         || humanChoice === 'scissors' && computerChoice === 'paper'
//      ){
//         console.log("You win! " + humanChoice + " beats " + computerChoice);
//      } else if (humanChoice === computerChoice){
//         console.log("Game Tied!")
//      } else{
//         console.log("You lost! " + computerChoice + " beats " + humanChoice)
//      }
// }

// let humanChoice = getHumanInput();
// let computerChoice = getComputerInput();

// playRound(humanChoice, computerChoice);
