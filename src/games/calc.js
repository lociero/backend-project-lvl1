import { getRandomInt, startGame } from '..';

const description = 'What is the result of the expression?\n';

const initBrainCalc = () => {
  const operations = {
    1: '+',
    2: '-',
    3: '*',
  };

  const calculate = (num1, num2, operation) => {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return console.log('undefined operation');
    }
  };

  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const operation = operations[getRandomInt(1, 3)];

  const correctAnswer = calculate(num1, num2, operation);
  const question = `${num1} ${operation} ${num2}`;

  return {
    answer: correctAnswer,
    question,
  };
};

export default () => startGame(description, initBrainCalc);
