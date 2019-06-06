#!/usr/bin/env node
import welcome from '../welcome';
import { showRules, askUserName, startGame } from '../brainEvenGameModule';

welcome();
showRules();
askUserName();
startGame();
