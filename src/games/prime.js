import { getRandomInt, startGame } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let div = 2; div < num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const initBrainPrime = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    answer: correctAnswer,
    question,
  };
};

export default () => startGame(description, initBrainPrime);
