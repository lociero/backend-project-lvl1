#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, brainPrime } from '../games/brain-prime-module';
import startGame from '../startGame-module';

welcome();
showRules();
startGame(askUserName(), brainPrime);
