import readlineSync from 'readline-sync';

export default (description, initGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('What is your name? ');
  console.log(`Hi, ${userName}!\n`);

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
