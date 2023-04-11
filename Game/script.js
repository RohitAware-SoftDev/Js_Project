'use strict';
// ! Selecting elments and assigning them to variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El= document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// ! current score  
// starting Value of current score as zero
const curScore0El = document.getElementById('current--0');
const curScore1El = document.getElementById('current--1');

// //! Setting starting score to 0
// score0El.textContent = '0'
// score1El.textContent = '0'

// // making dice as hidden
// diceEl.classList.add('hidden');

// // ! Assigning variables for function
// let curScore = 0;
// let activePlayer = 0;  // current player thats is player 0 is 1st playing player
// const scores = [0, 0]
// let playing =true;

// ! Make them globle variables

let curScore, activePlayer, scores,playing;

// ! Don't repeate the code so this code is availabe below else block
// ! 2nd Code 
const init = function(){
    curScore = 0;
    activePlayer = 0; // current player thats is player 0 is 1st playing player
    scores = [0, 0];
    playing = true;
    
    score0El.textContent = '0';
    score1El.textContent = '0';
    curScore0El.textContent = 0;
    curScore1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    diceEl.classList.add('hidden');
}

init();  //! Automatically Call the function when page loaded  


// ! 1st code 
const switchPlayer = function (){
    // !then next player
    // !bfore switching we make current score of 1st player to zero
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    curScore = 0;

    // Simple logic if dice roll bcome 1 then  it will check for the active player number
    // if it is 1 then change it to 1 if not make it as it was before
    activePlayer = activePlayer === 0 ? 1 : 0; //ternarry operator

    // ! toggle method do something if a class name given inside the bracket is preset in calss
    // ! name of of targeted id then it remove it and if not present it add it
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// ! Now Make a function that roll dice and check it is equals to one
btnRoll.addEventListener('click',function(){

    if(playing){
        // Genrate a random number tp dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        //  display dice
        diceEl.classList.remove('hidden');
        if (dice !== 0) {
            diceEl.src = `dice-${dice}.png`;
        }

        // check the roll for 1 if it true
        if (dice !== 1) {
            //! add the current number to current score
            curScore += dice;
            //! curScore0El.textContent = curScore //change it in future respctive player
            // dynamically select the active player
            document.getElementById(`current--${activePlayer}`).textContent =
                curScore;
        } else {
            // // !then next player
            // // !bfore switching we make current score of 1st player to zero
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // curScore = 0;

            // // Simple logic if dice roll bcome 1 then  it will check for the active player number
            // // if it is 1 then change it to 1 if not make it as it was before
            // activePlayer = activePlayer === 0 ? 1 :0 ;   //ternarry operator

            // // ! toggle method do something if a class name given inside the bracket is preset in calss
            // // ! name of of targeted id then it remove it and if not present it add it
            // player0El.classList.toggle('player--active');
            // player1El.classList.toggle('player--active');

            switchPlayer();
        }
    }
})


btnHold.addEventListener('click', function(){

    if(playing){
        // ! Add the current score to active player
        scores[activePlayer] += curScore;
        //  ie scores[1] = scores[1] = curscore

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // ! then check for the score is it 100
        //  it it is then finish the game
        //  as score hold now before switching check weather score is equal to 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
            //! after winning remove the dice image from UI
            diceEl.classList.add('hidden');
        } else {
            // !switch to next player
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', function () {
    // ! Below code is repeating so put it in init function (create one)
    // score0El.textContent = '0';
    // score1El.textContent = '0';
    // curScore0El.textContent = 0 ;
    // curScore1El.textContent = 0 ;
    // player0El.classList.remove('player--winner');
    // player1El.classList.remove('player--winner');
    // player1El.classList.remove('player--active');
    // diceEl.classList.add('hidden');
    // let curScore = 0;
    // let activePlayer = 0; // current player thats is player 0 is 1st playing player
    // const scores = [0, 0];
    // let playing = true;

    init(); //! call this function when user press the New Game button

    // ! We can do this function directly calling init you can do both
    // btnNew.addEventListener('click',init());
});