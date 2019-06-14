import playGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { correctAnswer, question };
};

export default () => playGame(description, generateData);
