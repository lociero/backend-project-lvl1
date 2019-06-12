import { getRandomInt, startGame } from '..';

const description = 'What number is missing in the progression?\n';

const initBrainProgression = () => {
  const getRandomProgression = (length = 10) => {
    const iter = (step, acc) => {
      if (acc.length === length) {
        return acc;
      }
      const newAcc = acc.concat(acc[acc.length - 1] + step);
      return iter(step, newAcc);
    };
    const stepSize = getRandomInt(1, 5);
    const startNumber = getRandomInt(0, 10);
    return iter(stepSize, [startNumber]);
  };

  const progression = getRandomProgression();
  const indexForChange = getRandomInt(1, progression.length - 2);
  const correctAnswer = progression[indexForChange];
  progression[indexForChange] = '..';
  const question = progression.join(' ');

  return {
    answer: correctAnswer,
    question,
  };
};

export default () => startGame(description, initBrainProgression);
