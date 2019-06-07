#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, startGame } from '../brainEvenGameModule';

welcome();
showRules();
askUserName();
startGame(askUserName());
