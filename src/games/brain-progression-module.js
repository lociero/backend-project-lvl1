const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const showRules = () => console.log('What number is missing in the progression?\n');

const getRandomProgression = (length) => {
  const iter = (step, acc) => {
    if (acc.length === length) {
      return acc;
    }
    const newAcc = acc.concat(acc[acc.length - 1] + step);
    return iter(step, newAcc);
  };
  return iter(getRandomInt(1, 5), [getRandomInt(0, 10)]); // stepSize, [randomStartNumber]
};

export const brainProgression = () => {
  const progression = getRandomProgression(10);
  const index = getRandomInt(1, progression.length - 2); // not the first or the last element
  const correctAnswer = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  return str => (str === 'question' ? question : correctAnswer);
};
