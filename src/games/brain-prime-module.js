export const showRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

export const brainPrime = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isPrime(num) === true ? 'yes' : 'no';
  return str => (str === 'question' ? num : correctAnswer);
};
