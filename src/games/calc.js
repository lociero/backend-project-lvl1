import playGame from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const generateData = () => {
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const operation = operations[getRandomInt(0, operations.length - 1)];

  const correctAnswer = `${calculate(num1, num2, operation)}`;
  const question = `${num1} ${operation} ${num2}`;

  return { correctAnswer, question };
};

export default () => playGame(description, generateData);
