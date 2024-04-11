let userChoice;
let computerChoice;
let loopControl = true;
const choices = ["rock", "paper", "scissors"];
let randomNumber = Math.floor(Math.random() * 3);

function getComputerChoice(){
    computerChoice = choices[randomNumber];

    return computerChoice;
}

// console.log(`The choice is ${getComputerChoice()}`);
// Return ok
let actualWinner;

let defineWinner = (userChoice, computerChoice) => {

    if(userChoice === "rock" && computerChoice === "scissors"){
        actualWinner = "user";
        return `${userChoice} smashes ${computerChoice}, YOU WIN!!!`;
    }else if(userChoice === "paper" && computerChoice === "rock"){
        actualWinner = "user";
        return `${userChoice} covers ${computerChoice}, YOU WIN!!!`;
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        actualWinner = "user";
        return `${userChoice} cuts ${computerChoice}, YOU WIN!!!`;
    }else if(computerChoice === "rock" && userChoice === "scissors"){
        actualWinner = "computer";
        return `${computerChoice} smashes ${userChoice}, You Lose!!!`;
    }else if(computerChoice === "paper" && userChoice === "rock"){
        actualWinner = "computer";
        return `${computerChoice} covers ${userChoice}, You Lose!!!`;
    }else if(computerChoice === "scissors" && userChoice === "paper"){
        actualWinner = "computer";
        return `${computerChoice} cuts ${userChoice}, You Lose!!!`;
    }else{
        actualWinner = "draw";
        return `Both choosed ${userChoice}. We have a Draw!`;
    }
}

function playRound(userChoice, computerChoice){
    // Verifying the user input
    while(loopControl){
        if(userChoice != "rock" && userChoice != "paper" && userChoice !=  "scissors"){
            userChoice = prompt("Sorry, I don't understand, try again: | Rock | Paper| Scissors |").toLowerCase();
        }else{
            loopControl = false;
        }
    }

    newWinner = defineWinner(userChoice, computerChoice);
    console.log(`Your Choose: ${userChoice}\nOponent Choose: ${computerChoice}`);

    return newWinner;
}

let newWinner;
let computerWins = 0; 
let userWins = 0;
let drawCounts = 0;
let winnerGame;

function playGame(){
    for(let i = 0; i < 5; i++){
        loopControl = true;
        console.log(playRound(prompt("choose: | Rock | Paper| Scissors |").toLowerCase(), getComputerChoice()));

        if(actualWinner === "user"){
            userWins++; 
        }else if(actualWinner === "computer"){
            computerWins++;
        }else if(actualWinner === "draw"){
            drawCounts++;
        }
    }

    if(userWins > computerWins){
        winnerGame = "user";
    }else if(computerWins > userWins){
        winnerGame = "computer";
    }else{
        winnerGame = "Draw";
    }

    return `
                        Final of Game\n
                      Here Are the results
        Winner: ${winnerGame}
        User Total Wins: ${userWins}
        Computer Total Wins: ${computerWins}
        Draws: ${drawCounts}           
    `;
}

console.log(playGame());