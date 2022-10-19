const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');

let roll = new rpgDiceRoller.DiceRoll('4d6');

//const roll = new DiceRoll('4d6');

let randTable = {
  dieType: ['d2', 'd3', 'd4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'],
  tableKeysValues: {1: 'value'}
};

console.log(roll.output);