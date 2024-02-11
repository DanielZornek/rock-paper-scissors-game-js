let userChoice;
let computerChoice;
let loopControl = true;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];

    return computerChoice;
}

// console.log(`The choice is ${getComputerChoice()}`);
// Return ok

function playRound(userChoice, computerChoice){
    // Verifying the user input
    while(loopControl){
        if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
            loopControl = false;
        }else{
            userChoice = prompt("Sorry, I don't understand, try again: | Rock | Paper| Scissors |").toLowerCase();
        }
    }

    console.log(`Your Choose: ${userChoice}\nOponent Choose: ${computerChoice}`);

    let defineWinner = () => {

        if(userChoice === "rock" && computerChoice === "scissors"){
            return `${userChoice} smashes ${computerChoice}, YOU WIN!!!`;
        }else if(userChoice === "paper" && computerChoice === "rock"){
            return `${userChoice} covers ${computerChoice}, YOU WIN!!!`;
        }else if(userChoice === "scissors" && computerChoice === "paper"){
            return `${userChoice} cuts ${computerChoice}, YOU WIN!!!`;
        }else if(computerChoice === "rock" && userChoice === "scissors"){
            return `${computerChoice} smashes ${userChoice}, You Lose!!!`;
        }else if(computerChoice === "paper" && userChoice === "rock"){
            return `${computerChoice} covers ${userChoice}, You Lose!!!`;
        }else if(computerChoice === "scissors" && userChoice === "paper"){
            return `${computerChoice} cuts ${userChoice}, You Lose!!!`;
        }else{
            return `Both choosed ${userChoice}. We have a Draw!`;
        }
    }

    return defineWinner();
}

console.log(playRound(prompt("choose: | Rock | Paper| Scissors |").toLowerCase(), getComputerChoice()));

console.log("Maybe everything is cool...");