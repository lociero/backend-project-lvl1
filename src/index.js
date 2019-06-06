// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// asking a user's name
const sayMyName = () => {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hi, ${userName}!`);
};
export default sayMyName;
