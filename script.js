
function getComputerChoice(){
    randomNumber = Math.random();
    if (randomNumber <= 0.33){
        return "scissors";
    } else if (randomNumber > 0.33 && randomNumber < 0.66){
        return "paper";  
    } else if (randomNumber >= 0.66) {
        return "rock"    
    } else {
        return "error"
    }
}

function getHumanChoice(){
    let humanHand = prompt("Enter rock, paper, or scissors: ");
    return humanHand.toLowerCase();  // Convert to lowercase here
}

function playRound(humanHand, compHand){
    if (humanHand !== "scissors" && humanHand !== "rock" && humanHand !== "paper") {
        return "invalid";
    }
    
    // Tie rounds
    if (compHand === humanHand){
        return "tie";
    }
    
    else if (humanHand === "rock" && compHand === "scissors") {
        return "human";
    } else if (humanHand === "paper" && compHand === "rock") {
        return "human"; 
    } else if (humanHand === "scissors" && compHand === "paper") {
        return "human";
    } 
    
    else {
        return "computer";
    }
}

let compScore = 0;
let humanScore = 0;

function updateScore(roundWinner){
    if (roundWinner === "human") {
        humanScore += 1;
    } else if (roundWinner === "computer") {
        compScore += 1;
    }
    
    console.log(`Score - Human: ${humanScore} | Computer: ${compScore}`);
}

function playGame(){
    console.log("Starting Rock Paper Scissors - First to 3 wins!");
    
    while (compScore < 3 && humanScore < 3){
        
        let humanHand = getHumanChoice();
        let compHand = getComputerChoice();
        
        console.log(`You chose: ${humanHand}`);
        console.log(`Computer chose: ${compHand}`);
        
        
        let roundWinner = playRound(humanHand, compHand);
        
       
        if (roundWinner === "invalid") {
            console.log("Invalid input! Please type rock, paper, or scissors.");
            continue;  
        }
        
        if (roundWinner === "tie") {
            console.log("It's a tie!");
        } else if (roundWinner === "human") {
            console.log("You win this round!");
        } else {
            console.log("Computer wins this round!");
        }
        
        
        updateScore(roundWinner);
        console.log("---");
    }
    
    if (humanScore === 3) {
        console.log("🎉 YOU WIN THE GAME! 🎉");
    } else {
        console.log("💻 COMPUTER WINS THE GAME! 💻");
    }
}

// Start the game
console.log(playGame());