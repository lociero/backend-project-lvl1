#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, brainPrime } from '../games/prime';
import startGame from '../startGame-module';

welcome();
showRules();
startGame(askUserName(), brainPrime);
