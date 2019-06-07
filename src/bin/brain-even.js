#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, startGame } from '../games/brain-even-module';

welcome();
showRules();
startGame(askUserName());
