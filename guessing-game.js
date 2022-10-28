// Simple Guessing Number Game

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let secretNumber = randomInRange(0, 100);

let numAttempts = 5;

const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log('Too high.');
        return false;
    }
    if (num < secretNumber) {
        console.log('Too low.');
        return false;
    }
    if (Number(num) === secretNumber) {
        console.log('Correct!');
        return true;
    }
};

const askGuess = () => {
    rl.question('Enter a guess: ', (n) => {
        numAttempts--;
        if (numAttempts !== 0) {
            if (checkGuess(n)) {
                console.log('You Win!');
                rl.close();
            } else askGuess();
        } else {
            console.log('You Lose.');
            rl.close();
        }
      });
};

const askRange = () => {
    rl.question('Enter a max number: ', (max) => {
        max = Number(max);
        rl.question('Enter a min number: ', (min) => {
            min = Number(min);
            secretNumber = randomInRange(min, max);
            askGuess();
        });
    });
};

const askLimit = () => {
    rl.question('Enter number of attempts: ', (n) => {
        n = Number(n);
        numAttempts = n;
        askRange();
    });
}

askLimit();
