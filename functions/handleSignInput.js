
import chalk from 'chalk';

export default function handleSignInput(playerSign, playerName) {
  let npcSign = getRandomSign();
  if (npcSign.value === playerSign) {
    console.log(chalk.bold.yellow('DRAW!'));
    return ''
  } else if (npcSign.winsAgainst === playerSign) {
    console.log(chalk.bold.red(`NPC (${npcSign.value}) wins against ${playerName} (${playerSign})`));
    return 'npc'
  } else if (npcSign.losesAgainst ===playerSign) {
    console.log(chalk.bold.green(`${playerName} (${playerSign}) wins against NPC (${npcSign.value})`));
    return 'player'
  }
}

function getRandomSign() {
  const availableSigns = [
    {
      value: 'rock',
      winsAgainst: 'scissors',
      losesAgainst: 'paper',
    },
    {
      value: 'paper',
      winsAgainst: 'rock',
      losesAgainst: 'scissors',
    },
    {
      value: 'scissors',
      winsAgainst: 'paper',
      losesAgainst: 'rock',
    }
  ]
  return availableSigns[Math.floor(Math.random() * 3)]
}