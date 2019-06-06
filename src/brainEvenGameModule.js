// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

export const showRules = () => console.log('Answer "yes" if number even otherwise answer "no".');

const getRandomInt = max => Math.floor(Math.random() * max);
const isEven = num => num % 2 === 0;

let userNameGlobal; // not sure how to do it without global var (make wrapper function?)
export const askUserName = () => {
  const userName = readlineSync.question('What is your name? ');
  userNameGlobal = userName;
  console.log(`Hi, ${userName}!`);
};

export const startGame = () => {
  const iter = (counter) => {
    if (counter > 3) {
      return console.log(`Congratulations, ${userNameGlobal}!`);
    }
    const value = getRandomInt(100);
    const userAnswer = readlineSync.question(`Question: ${value}\nYour answer: `);
    const correctAnswer = isEven(value) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userNameGlobal}!`);
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  return iter(1);
};
