// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

// eslint-disable-next-line max-len
export default (userName, gameName) => { // gameName is a function NAME and it MUST return function str => /* - */;
  const iter = (counter) => {
    if (counter > 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const game = gameName();
    const correctAnswer = game('answer');
    const userAnswer = readlineSync.question(`Question: ${game('question')}\nYour answer: `);
    if (userAnswer !== String(correctAnswer)) {
      return console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  return iter(1);
};
