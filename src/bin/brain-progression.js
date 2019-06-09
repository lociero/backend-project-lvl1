#!/usr/bin/env node
import welcome from '../welcome';
import askUserName from '..';
import { showRules, brainProgression } from '../games/brain-progression-module';
import startGame from '../startGame-module';

welcome();
showRules();
startGame(askUserName(), brainProgression);
