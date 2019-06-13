import startGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const generateData = () => {
  const lengthOfProgression = 10;

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

  const progression = getRandomProgression(lengthOfProgression);
  const indexForChange = getRandomInt(1, progression.length - 2);
  const correctAnswer = progression[indexForChange];
  progression[indexForChange] = '..';
  const question = progression.join(' ');

  return { correctAnswer, question };
};

export default () => startGame(description, generateData);
