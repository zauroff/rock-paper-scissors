
var humanScore = 0;
var computerScore = 0;

var currentHumanScoreValue = document.querySelectorAll('.human_score p')[0]
var currentComputerScoreValue = document.querySelectorAll('.computer_score p')[0]

var HumanMove = document.querySelectorAll('.human_score p')[2]
var ComputerMove = document.querySelectorAll('.computer_score p')[2]



document.getElementById("rock").onclick =function () {playGame("Rock", getComputerMove());}
document.getElementById("paper").onclick = function () {playGame("Paper", getComputerMove());}
document.getElementById("scissors").onclick = function () {playGame("Scissors", getComputerMove());}
document.getElementById("reset").onclick = reset;



function reset(){
    currentComputerScoreValue.innerHTML = 0;
    currentHumanScoreValue.innerHTML = 0;
    document.querySelectorAll('.game_container h3')[0].innerHTML = "Start Game";
    document.querySelectorAll('.game_container h3')[0].style.color = "rgb(88, 88, 88";
    HumanMove.innerHTML = "";
    ComputerMove.innerHTML = "";
    console.log("reset");

}

function getRandomInt(){
    var min = 1;
    var max = 4;
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerMove(){
    var randomNumber = getRandomInt();
    if (randomNumber == 1){
        return "Rock";

    } else if (randomNumber == 2){
        return "Paper";

    } else if (randomNumber == 3){
        return "Scissors";
    }

}


function playGame(humanMove, computerMove){
    HumanMove.innerHTML = humanMove;
    ComputerMove.innerHTML = computerMove;
    humanMove = humanMove.toLowerCase();
    computerMove = computerMove.toLowerCase();

    if (humanMove == "rock" && computerMove == "scissors"){
        humanWon();

    }else if (humanMove == "paper" && computerMove == "rock"){
        humanWon();

    }else if (humanMove == "scissors" && computerMove == "paper"){
        humanWon();

    }else if (humanMove == computerMove){
        draw();
    }else{
        computerWon();
    }



}

function humanWon(){
    currentHumanScoreValue.innerHTML ++;
    document.querySelectorAll('.game_container h3')[0].style.color = "rgb(93, 144, 252)";
    document.querySelectorAll('.game_container h3')[0].innerHTML = "You Won!";
    
}

function computerWon(){
    currentComputerScoreValue.innerHTML ++;
    document.querySelectorAll('.game_container h3')[0].style.color = "rgb(255, 46, 53)";
    document.querySelectorAll('.game_container h3')[0].innerHTML = "You Lost.";
    
}

function draw(){
    document.querySelectorAll('.game_container h3')[0].style.color = "rgb(88, 88, 88";
    document.querySelectorAll('.game_container h3')[0].innerHTML = "Draw.";

}
// color: rgb(88, 88, 88);