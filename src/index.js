import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const welcome = () => console.log('Welcome to the Brain Games!');

export const askUserName = () => {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};

export const startGame = (rules, initGame) => {
  welcome();
  console.log(rules);
  const userName = askUserName();

  const iter = (gameRound) => {
    if (gameRound === 4) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const initializedGame = initGame();
    const correctAnswer = initializedGame.answer;
    const userAnswer = readlineSync.question(`Question: ${initializedGame.question}\nYour answer: `);
    if (userAnswer !== String(correctAnswer)) {
      return console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
    return iter(gameRound + 1);
  };
  return iter(1);
};
