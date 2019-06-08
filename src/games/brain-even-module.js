export const showRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

const getRandomInt = max => Math.floor(Math.random() * max);
const isEven = num => num % 2 === 0;

export const brainEven = () => {
  const value = getRandomInt(100);
  const correctAnswer = isEven(value) ? 'yes' : 'no';
  return str => (str === 'question' ? value : correctAnswer);
};

/*
const brainEvenV2 = () => {
  const value = getRandomInt(100);
  const correctAnswer = isEven(value) ? 'yes' : 'no';
  return {
    answer: correctAnswer,
    question: value,
  };
};
*/
