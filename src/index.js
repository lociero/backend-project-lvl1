import readlineSync from 'readline-sync';

const totalRoundsCount = 3;

export default (description, generateData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('What is your name? ');
  console.log(`Hi, ${userName}!\n`);

  const iter = (roundsCount) => {
    if (roundsCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { correctAnswer, question } = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(roundsCount - 1);
  };
  iter(totalRoundsCount);
};
