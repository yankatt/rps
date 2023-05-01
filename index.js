#! /usr/bin/env node

import { input } from '@inquirer/prompts';

let scores = {
  player: 0,
  npc: 0,
}

const playerName = await input({ message: 'Enter your name' });
