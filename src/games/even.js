import { getRandomInt, startGame } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const initBrainEven = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    answer: correctAnswer,
    question,
  };
};

export default () => startGame(description, initBrainEven);
