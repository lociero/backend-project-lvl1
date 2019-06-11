import { getRandomInt, startGame } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const brainEvenV2 = () => {
  const value = getRandomInt(0, 100);
  const correctAnswer = isEven(value) ? 'yes' : 'no';
  return {
    answer: correctAnswer,
    question: value,
  };
};

export default () => startGame(rules, brainEvenV2);
