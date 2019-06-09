export const showRules = () => console.log('What is the result of the expression?\n');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperation = {
  0: (num1, num2) => str => (str === 'question' ? `${num1} + ${num2}` : num1 + num2),
  1: (num1, num2) => str => (str === 'question' ? `${num1} - ${num2}` : num1 - num2),
  2: (num1, num2) => str => (str === 'question' ? `${num1} * ${num2}` : num1 * num2),
};

export const brainCalc = () => {
  const index = getRandomInt(0, 2); // [0 => +] [1 => -] [2 => *]
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const operation = getRandomOperation[index](num1, num2);
  return operation; // function
};
