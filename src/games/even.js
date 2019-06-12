import { getRandomInt, startGame } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const initBrainEven = () => {
  const isEven = num => num % 2 === 0;

  const value = getRandomInt(0, 100);
  const correctAnswer = isEven(value) ? 'yes' : 'no';

  return {
    answer: correctAnswer,
    question: value,
  };
};

export default () => startGame(description, initBrainEven);
