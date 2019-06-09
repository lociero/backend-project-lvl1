export const showRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = num => num % 2 === 0;

export const brainEven = () => {
  const value = getRandomInt(0, 100);
  const correctAnswer = isEven(value) ? 'yes' : 'no';
  return str => (str === 'question' ? value : correctAnswer);
};

/*
const brainEvenV2 = () => {
  const value = getRandomInt(0, 100);
  const correctAnswer = isEven(value) ? 'yes' : 'no';
  return {
    answer: correctAnswer,
    question: value,
  };
};
*/
