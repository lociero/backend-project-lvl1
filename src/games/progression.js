import playGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (step, acc, length) => {
  if (acc.length === length) {
    return acc;
  }
  const newElement = acc[acc.length - 1] + step;
  const newAcc = acc.concat(newElement);
  return generateProgression(step, newAcc, length);
};

const generateData = () => {
  const step = getRandomInt(1, 5);
  const firstProgressionElement = getRandomInt(0, 10);

  const progression = generateProgression(step, [firstProgressionElement], progressionLength);
  const hiddenElementIndex = getRandomInt(1, progressionLength - 2);
  const correctAnswer = `${progression[hiddenElementIndex]}`;
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return { correctAnswer, question };
};

export default () => playGame(description, generateData);
