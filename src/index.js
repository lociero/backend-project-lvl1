import readlineSync from 'readline-sync';

export default (description, generateData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('What is your name? ');
  console.log(`Hi, ${userName}!\n`);

  const totalRounds = 3;

  const iter = (gameRounds) => {
    if (gameRounds === 0) {
      console.log(`Congratulations, ${userName}!`);
      return 0;
    }
    const { correctAnswer, question } = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
    console.log('Correct!');
    return iter(gameRounds - 1);
  };
  return iter(totalRounds);
};
