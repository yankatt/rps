#! /usr/bin/env node

import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import figlet from 'figlet';
import handleSignInput from './functions/handleSignInput.js';

let scores = {
  player: 0,
  npc: 0,
}

const playerName = await input({ message: 'Enter your name' });

while(scores.player < 3 && scores.npc < 3) {
  const sign = await select({
    message: 'Select a sign',
    choices: [
      {
        name: 'rock',
        value: 'rock',
        description: 'solid rock! never a bad choice!',
      },
      {
        name: 'paper',
        value: 'paper',
        description: 'soft and smooth! do not underestimate it!',
      },
      {
        name: 'scissors',
        value: 'scissors',
        description: 'sharp like a razorblade!',
      },
    ],
  });

  const winner = handleSignInput(sign, playerName)

  if(winner) {
    scores[winner]++
  }

  console.table({
    [playerName]: scores.player,
    npc: scores.npc
  })
  console.log('\n')
}

const won = scores.player === 3 ? true : false

figlet.text(
  `${won ? playerName : 'NPC'} WINS!`,
  function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
