const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const showRules = () => console.log('Find the greatest common divisor of given numbers.\n');

export const brainGcd = () => {
  const num1 = getRandomInt(0, 25);
  const num2 = getRandomInt(0, 25);
  const iter = (divisor) => {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return str => (str === 'question' ? `${num1} ${num2}` : divisor);
    }
    return iter(divisor - 1);
  };
  return iter(Math.min(num1, num2));
};