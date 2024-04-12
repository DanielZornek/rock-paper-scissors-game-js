let computerChoice;
const resultArea = document.querySelector("#result-area");
const choices = ["rock", "paper", "scissors"];
let buttons = document.querySelectorAll(".choose-button");
let roundControl = 5;
let userWinsArea = document.querySelector("#user-wins"); 
let computerWinsArea = document.querySelector("#computer-wins"); 
let draws = document.querySelector("#draws"); 

let newWinner;
let computerWins = 0; 
let userWins = 0;
let drawCounts = 0;
let winnerGame;

function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random() * 3)];

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

    computerChoice = getComputerChoice();
    newWinner = defineWinner(userChoice, computerChoice);

    resultArea.firstChild.textContent = `Your Choose: ${userChoice} | Oponent Choose: ${computerChoice} | ${defineWinner(userChoice, computerChoice)}`;

    if(actualWinner === "user"){
        userWins++; 
        userWinsArea.textContent = `User Wins: ${userWins}`;
    }else if(actualWinner === "computer"){
        computerWins++;
        computerWinsArea.textContent = `Computer wins: ${computerWins}`;
    }else if(actualWinner === "draw"){
        drawCounts++;
        draws.textContent = `Draws: ${drawCounts}`;
    }
    //console.log(`Your Choose: ${userChoice}\nOponent Choose: ${computerChoice}\n${defineWinner(userChoice, computerChoice)}`);
    if(roundControl === 0){
        verifyDraw();
    }else{
        roundControl--;
    }
}

function verifyDraw(){
    if(userWins > computerWins){
        winnerGame = "user";
    }else if(computerWins > userWins){
        winnerGame = "computer";
    }else if(userWins == computerWins){
        resultArea.textContent = "This is the Golden POINT, the next winner will win the game!"
    }else{
        loopControl = false;
        buttons.disabled =  true;
        resultArea.textContent = `The winner is ${winnerGame}`;
    }
}