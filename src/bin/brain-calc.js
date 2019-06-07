#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, startGame } from '../games/brain-calc-module';

welcome();
showRules();
startGame(askUserName());
