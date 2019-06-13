import startGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const generateProgression = (step, acc, length) => {
  if (acc.length === length) {
    return acc;
  }
  const lastElement = acc[acc.length - 1];
  const newAcc = acc.concat(lastElement + step);
  return generateProgression(step, newAcc, length);
};

const generateData = () => {
  const lengthOfProgression = 10;
  const stepSize = getRandomInt(1, 5);
  const startNumber = getRandomInt(0, 10);

  const progression = generateProgression(stepSize, [startNumber], lengthOfProgression);
  const indexForChange = getRandomInt(1, lengthOfProgression - 2);
  const correctAnswer = progression[indexForChange];
  progression[indexForChange] = '..';
  const question = progression.join(' ');

  return { correctAnswer, question };
};

export default () => startGame(description, generateData);
