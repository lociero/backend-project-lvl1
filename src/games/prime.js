import { getRandomInt, startGame } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const initBrainPrime = () => {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let div = 2; div < num; div += 1) {
      if (num % div === 0) {
        return false;
      }
    }
    return true;
  };

  const num = getRandomInt(1, 100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return {
    answer: correctAnswer,
    question: num,
  };
};

export default () => startGame(description, initBrainPrime);
