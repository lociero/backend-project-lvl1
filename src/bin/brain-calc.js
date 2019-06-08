#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, brainCalc } from '../games/brain-calc-module';
import startGame from '../startGame-module';

welcome();
showRules();
startGame(askUserName(), brainCalc);
