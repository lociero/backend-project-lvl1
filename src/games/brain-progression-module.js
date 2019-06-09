const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const showRules = () => console.log('What number is missing in the progression?\n');

const getRandomProgression = () => {
  const iter = (step, acc) => { // stepSize, [randomStartNumber]
    if (acc.length === 10) {
      return acc;
    }
    const newAcc = acc.concat(acc[acc.length - 1] + step);
    return iter(step, newAcc);
  };
  return iter(getRandomInt(1, 5), [getRandomInt(0, 10)]);
};

export const brainProgression = () => {
  const index = getRandomInt(1, 9); // not the first or the last element
  const progression = getRandomProgression();
  const correctAnswer = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  return str => (str === 'question' ? question : correctAnswer);
};
