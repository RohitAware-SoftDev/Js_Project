'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//!truc method will cut the decimal point eg 10.123212 it will make as 10 only

let score = 20;
let highScore = 0;

// ! Now make code repeated free i.r refractring = restructuring code  : removing the duplicates/again again coming code
//! Using the Function (Likes Method used for SetOfInstruction)
//  All the statements inside the function are repeated code inside the program

let displayMassg = function (massage) {
    document.querySelector('.message').textContent = massage;
};

let displayNO = function (num) {
    document.querySelector('.number').textContent = num;
};

let setNO = function (num) {
    document.querySelector('.score').textContent = num;
};

let styleTag = function (color, width) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
};

//! const guess = (document.querySelector(".number").textContent = secretNumber);

console.log(secretNumber);

// ! Event Listener : OnClick For Check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //! it will return a String value so convert it to a number cast
    // console.log(typeof guess, guess);

    //! there is no number
    if (!guess) {
        displayMassg('🚫 No Number ??');

        // ! when number is equals to secret number or player wins
    } else if (guess === secretNumber) {
        displayMassg('🥳 Correct Number 🎆');
        displayNO(secretNumber);
        styleTag('#60b347', '30rem');

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // !
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMassg(guess > secretNumber ? 'Too High🎆' : 'Too Low 🎆');
            score--;
            setNO(score);
        } else {
            displayMassg('You Looses the Game');
            setNO(0);
        }
    }
    //! Below code is just like the duplicate code/ data that's makes the code lengthy
    //     // ! when the guess is to high
    // } else if (guess > secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too High🎆';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             'You Looses the Game';
    //     }

    //     // ! when the guess is to low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low 🎆';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             'You Looses the Game';
    //     }
    //
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMassg('Start Guessing -----!');
    displayNO('?');
    setNO(score);
    document.querySelector('.guess').value = '';
    styleTag('#222', '15rem');
    console.log(secretNumber);
});
