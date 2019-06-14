import playGame from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  const iter = (divisor) => {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1);
  };
  return iter(Math.min(num1, num2));
};

const generateData = () => {
  const num1 = getRandomInt(1, 25);
  const num2 = getRandomInt(1, 25);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${findGcd(num1, num2)}`;

  return { correctAnswer, question };
};

export default () => playGame(description, generateData);
