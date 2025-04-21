const restartButton = document.getElementById("restart-button");
restartButton.addEventListener('click', restart);

const resultsTexts = document.getElementsByName("results-text");

const chooseButtons = document.getElementsByName("choose-button");
for(let chooseButton of chooseButtons){
    chooseButton.addEventListener('click', getUserChoice);
}

const choices = [
    rock = {
        choiceName: "Rock",
        winAgainst: "Scissors",
        loseAgainst: "Paper"
    }, 
    paper = {
        choiceName: "Paper",
        winAgainst: "Rock",
        loseAgainst: "Scissors"

    }, 
    scissors = {
        choiceName: "Scissors",
        winAgainst: "Paper",
        loseAgainst: "Rock"
    }
]


let opponentChose = "";
let userChose = "";
let userWonOrNot = "";
let resultsShown = false;

opponentChooses();

function opponentChooses(){
    //chocies a random choice from the 'choices' array
    opponentChose = choices[getRandomInt(choices.length - 1)].choiceName;

    console.log(opponentChose);
}

// There is no min value as the function will be used for an array and the min number in an array is 0.
function getRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}

function getUserChoice(){
    for(let choice of choices){
        if(this.value == choice.choiceName){
            userChose = choice;
            
            console.log(userChose);

            compareOpponentAndUserChoices();
        }
    }
}

function compareOpponentAndUserChoices(){
    if(opponentChose == userChose.choiceName){
        userWonOrNot = "Draw";
    }
    else if(opponentChose == userChose.winAgainst){
        userWonOrNot = "You won!";
    }
    else if(opponentChose == userChose.loseAgainst){
        userWonOrNot = "You...lost";
    }

    console.log(userWonOrNot);

    showIfUserWonOrNot();
}

function showIfUserWonOrNot(){
    if(resultsShown == false){
        for(let resultsText of resultsTexts){
            resultsText.classList.add("enter-animation");
    
            if(resultsText.id == "user-chose-text"){
                resultsText.innerHTML = userChose.choiceName;
            }
            else if(resultsText.id == "opponent-chose-text"){
                resultsText.innerHTML = opponentChose;
            }
            else if(resultsText.id == "win-lose-draw-text"){
                resultsText.innerHTML = userWonOrNot;
            }

            resultsShown = true;
    
            //removes the enter animation class after the animation is complete so it can be readded later
            setTimeout(100, () => {resultsText.classList.remove("eneter-animation")});
        }
    }
}


function restart(){
    opponentChose = "";
    userChose = "";
    userWonOrNot = "";
    resultsShown = false;

    for(let resultsText of resultsTexts){
        resultsText.innerHTML = "";
    }

    opponentChooses();
}