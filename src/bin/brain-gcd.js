#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, brainGcd } from '../games/brain-gcd-module';
import startGame from '../startGame-module';

welcome();
showRules();
startGame(askUserName(), brainGcd);
