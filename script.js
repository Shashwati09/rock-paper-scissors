let choice, cmp, ply,result, i, moves = 1,cScore = 0, pScore = 0 ;
let round = document.querySelector('.round-counter');
let count = document.querySelector('.counter');
let pCount = document.querySelector('.pscore');
let cCount = document.querySelector('.cscore');
let winner = document.querySelector('.winner');

let playRound = (ply) => {
    // computer's pick 
    let getComputerChoice = () => {
        let choices = ["rock", "paper", "scissors"];
        randomIndex = Math.floor(Math.random() * choices.length);
        choice = choices[randomIndex];
        return choice;
      };
      cmp = getComputerChoice();
      console.log(cmp);
    console.log(ply);
    console.log(moves);
    
      if(moves < 5){
        moves++;
        round.innerHTML = 'Round - ' + moves;
    //game logic
    if (cmp == ply){
        result = "It's a tie!";
    }
    // rock block
    else if (ply == 'rock'){
        if (cmp == 'paper'){
            result = "Computer's choice was paper. Computer wins!"
            cScore++;
            cCount.innerHTML = cScore;
        }
        else {  
            result = "Computer's choice was scissors. You win!"
            pScore++;
            pCount.innerHTML = pScore;
        };
    }
    // paper block
    else if (ply == 'paper'){
        if (cmp == 'rock'){
            result = "Computer's choice was rock. You win!";
            pScore++;
            pCount.innerHTML = pScore;
        }
        else{   
            result = "Computer's choice was scissors. Computer wins!";
            cScore++;
            cCount.innerHTML = cScore;
        }
    }
    // scissors block
    else if (ply == 'scissors'){
        if (cmp == 'paper'){
            result = "Computer's choice was paper. You win!";
            pScore++;
            pCount.innerHTML = pScore;
        }
        else {  
            result = "Computer's choice was rock. Computer wins!";
            cScore++;
            cCount.innerHTML = cScore;
        }
    }

    let display = document.querySelector('.result');
    // let resultP = document.createElement('p');
    // resultP.textContent = result;

    display.innerHTML = result;
    console.log(moves);
}

else {
    count.innerHTML = 'Rounds are over';

    if(pScore > cScore)
        winner.innerHTML = 'You are the winner!';
    else    
        winner.innerHTML = 'Computer is the winner';
    }

}

