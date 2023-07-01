let chosenOption = "";
let rock = "";
let paper = "";
let scissor = "";
let you = "";
let computer = "";
let winner = "";
let score = 0;
let scoreComputer = 0;



rock = document.getElementById("rockButton");
rock.addEventListener("click", () => {
  chosenOption = "rock";
  paper = "";
  scissor = "";
  compTurn();
})

paper = document.getElementById("paperButton");
paper.addEventListener("click", () => {
  chosenOption = "paper";
  rock = "";
  scissor = ""; 
  compTurn();
})

scissor = document.getElementById("scissorButton");
scissor.addEventListener("click", () => {
  chosenOption = "scissor";
  rock = "";
  paper = "";
  compTurn();
})


function compTurn() {
  let CompChoicesArray = ['rock', 'paper', 'scissor'];
  let randomIndex = Math.floor(Math.random() * CompChoicesArray.length);
  let compRandomChoice = CompChoicesArray[randomIndex];
  let counter = 0;

  //counter nám bude určovat, jaký obrazek se objevi, jelikož jsou jen tři, musi se po iteraci resetovat jeho hodnota zpět na 0. 
  animationInterval = setInterval(() => {
    if (counter === 0) {
      document.getElementById("computerObr").innerHTML = '<img src="rock.png">';
    } else if (counter === 1) {
      document.getElementById("computerObr").innerHTML = '<img src="paper.png">';
    } else if (counter === 2) {
      document.getElementById("computerObr").innerHTML = '<img src="scissors.png">';
    }

    counter++;

    if (counter > 2) {
      counter = 0;
    }
  }, 200);//interval střídání obrázku - půl minuty


  setTimeout(() => {
    clearInterval(animationInterval);//zastaví předchozí animaci

    //varianty pro pripad, kdy comp vybere "rock"
    if (compRandomChoice === CompChoicesArray[0] && chosenOption == "rock") {
      document.getElementById("computerObr").innerHTML = '<img src="rock.png">';
      document.getElementById("winner").innerHTML = "It's a draw!";
    }
    else if (compRandomChoice === CompChoicesArray[0] && chosenOption == "paper") {
      document.getElementById("computerObr").innerHTML = '<img src="rock.png">';
      document.getElementById("winner").innerHTML = "You won!";
      updatedScore = score + 1;
      document.getElementById("score").innerHTML = updatedScore;
    }
    else if (compRandomChoice === CompChoicesArray[0] && chosenOption == "scissor") {
      document.getElementById("computerObr").innerHTML = '<img src="rock.png">';
      document.getElementById("winner").innerHTML = "You lost!";
      updatedScoreComputer = scoreComputer + 1;
      document.getElementById("scoreComputer").innerHTML = updatedScoreComputer;
    }

    //varianty pro pripad, kdy comp vybere "paper"
    else if (compRandomChoice === CompChoicesArray[1] && chosenOption == "paper") {
      document.getElementById("computerObr").innerHTML = '<img src="paper.png">';
      document.getElementById("winner").innerHTML = "It's a draw!";
    }
    else if (compRandomChoice === CompChoicesArray[1] && chosenOption == "rock") {
      document.getElementById("computerObr").innerHTML = '<img src="paper.png">';
      document.getElementById("winner").innerHTML = "You lost!";
      updatedScoreComputer = scoreComputer + 1;
      document.getElementById("scoreComputer").innerHTML = updatedScoreComputer;
    }
    else if (compRandomChoice === CompChoicesArray[1] && chosenOption == "scissor") {
      document.getElementById("computerObr").innerHTML = '<img src="paper.png">';
      document.getElementById("winner").innerHTML = "You won!";
      updatedScore = score + 1;
      document.getElementById("score").innerHTML = updatedScore;
    }

    //variant pro pripad, kdy comp vybere "scissor"
    else if (compRandomChoice === CompChoicesArray[2] && chosenOption == "scissor") {
      document.getElementById("computerObr").innerHTML = '<img src="scissors.png">';
      document.getElementById("winner").innerHTML = "It's a draw!";
    }
    else if (compRandomChoice === CompChoicesArray[2] && chosenOption == "rock") {
      document.getElementById("computerObr").innerHTML = '<img src="scissors.png">';
      document.getElementById("winner").innerHTML = "You won!";
      updatedScore = score + 1;
      document.getElementById("score").innerHTML = updatedScore;
    }
    else if (compRandomChoice === CompChoicesArray[2] && chosenOption == "paper") {
      document.getElementById("computerObr").innerHTML = '<img src="scissors.png">';
      document.getElementById("winner").innerHTML = "You lost!";
      updatedScoreComputer = scoreComputer + 1;
      document.getElementById("scoreComputer").innerHTML = updatedScoreComputer;
    }
  }, 2000);//po jak dlouhé animaci se objeví finální random vybraný obrázek
  score = parseInt(updatedScore);
  scoreComputer = parseInt(updatedScoreComputer);
}



function NewGame() {
  clearInterval(animationInterval);
  chosenOption = "";
  rock = "";
  paper = "";
  scissor = "";
  you = "";
  computer = "";
  winner = "";
  score = "";

  document.getElementById("computerObr").innerHTML = '<img src="questionMarkBW.png">';
  document.getElementById("winner").innerHTML = "Pick up rock,paper or scissors!";
}
