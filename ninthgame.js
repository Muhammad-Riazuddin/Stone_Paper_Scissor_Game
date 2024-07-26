let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}


const gameDraw = () => {
    //console.log("Game is draw");
    msg.innerText = "game is draw, Play again.";
    msg.style.backgroundColor = "#081b31";

}


const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("you win.");
        msg.innerText = `You win. Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++; 
        computerScorePara.innerText = computerScore;
        //console.log("you lose");
        msg.innerText = `You lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";


    }
}


const playGame = (userChoice) => {
    console.log("user choice is:", userChoice);

    //generate computer choice
    const computerChoice = genComputerChoice();
    console.log("computer choice is:", computerChoice);

    if (userChoice === computerChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {

            // paper, Scissor
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {

            //rock, Scissor
            userWin = computerChoice === "scissor" ? false : true;
        }
        else {

            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})