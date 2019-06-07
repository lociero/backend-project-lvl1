// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

export const showRules = () => console.log('What is the result of the expression?');
const getRandomInt = max => Math.floor(Math.random() * max);

const getRandomOperation = {
  0: (num1, num2) => str => (str === 'toStr' ? `${num1} + ${num2}` : num1 + num2),
  1: (num1, num2) => str => (str === 'toStr' ? `${num1} - ${num2}` : num1 - num2),
  2: (num1, num2) => str => (str === 'toStr' ? `${num1} * ${num2}` : num1 * num2),
};

export const startGame = (userName) => {
  const iter = (counter) => {
    if (counter > 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const index = getRandomInt(3); // [0 => +] [1 => -] [2 => *]
    const num1 = getRandomInt(10);
    const num2 = getRandomInt(10);
    const operation = getRandomOperation[index](num1, num2);
    const correctAnswer = operation();
    const userAnswer = readlineSync.question(`Question: ${operation('toStr')}\nYour answer: `);
    if (Number(userAnswer) !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  return iter(1);
};
