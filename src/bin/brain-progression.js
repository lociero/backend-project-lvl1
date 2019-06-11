#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, brainProgression } from '../games/progression';
import startGame from '../startGame-module';

welcome();
showRules();
startGame(askUserName(), brainProgression);
