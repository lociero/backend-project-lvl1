#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, brainEven } from '../games/brain-even-module';
import startGame from '../startGame-module';

welcome();
showRules();
startGame(askUserName(), brainEven);
