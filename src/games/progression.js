import { getRandomInt, startGame } from '..';

const description = 'What number is missing in the progression?\n';

const initBrainProgression = () => {
  const getRandomProgression = (length) => {
    const iter = (step, acc) => {
      if (acc.length === length) {
        return acc;
      }
      const newAcc = acc.concat(acc[acc.length - 1] + step);
      return iter(step, newAcc);
    };
    return iter(getRandomInt(1, 5), [getRandomInt(0, 10)]);
  };

  const progression = getRandomProgression(10);
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
