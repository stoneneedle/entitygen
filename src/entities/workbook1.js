// Workbook 1 - A sample workbook for creating entity generators

const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');

// Very simple monster encounter table for a dungeon for 1st-level 5E characters. dhd = death house dungeon, the first dungeon in Curse of Strahd 5e

// basic 1D entity generator (beg), of type randTable
let beg = {
  entityTitle: 'Curse of Strahd 5E Death House Dungeon Encounter Table',
  genType: 'randTable2D',
  dieType: 'd3',
  tableKeysValues: {1: 'kobold', 2: 'goblin', 3: 'ghoul'},
  rollUp: function() {
    let roll = new rpgDiceRoller.DiceRoll(this.dieType);
    return this.tableKeysValues[(new rpgDiceRoller.DiceRoll(this.dieType)).total];
  }
};

// Basic entity generator example - number of entities - no title
let beg1 = {
  genType: 'numEntity',
  numberOf: 'd4',
  entityType: 'goblin',
  rollUp: function() {
    let roll = new rpgDiceRoller.DiceRoll(this.numberOf);
    return roll.total + ' ' + this.entityType + ((roll.total > 1) ? 's' : '');
  }
};

// Basic entity generator 2 - number range - no title
let beg2 = {
  genType: 'numRange',
  lower: 1,
  upper: 5,
  entityType: 'cloudy day',
};

// 3D randTable advanced entity generator example
let aeg1 = {
  entityTitle: 'Curse of Strahd 5E Death House Dungeon Encounter Table',
  genType: 'randTable3D',
  dieType: 'd3',
  tableKeysValues: {
    1: {
      genType: 'numEntity',
      numberOf: 'd4',
      entityType: 'kobold',
      rollUp: function() {
        let roll = new rpgDiceRoller.DiceRoll(this.numberOf);
        return roll.total + ' ' + this.entityType + ((roll.total > 1) ? 's' : '');
      }
    }.rollUp(),
    2: {
      genType: 'numEntity',
      numberOf: 'd6',
      entityType: 'goblin',
      rollUp: function() {
        let roll = new rpgDiceRoller.DiceRoll(this.numberOf);
        return roll.total + ' ' + this.entityType + ((roll.total > 1) ? 's' : '');
      }
    }.rollUp(),
    3: {
      genType: 'numEntity',
      numberOf: 'd8',
      entityType: 'ghoul',
      rollUp: function() {
        let roll = new rpgDiceRoller.DiceRoll(this.numberOf);
        return roll.total + ' ' + this.entityType + ((roll.total > 1) ? 's' : '');
      }
    }.rollUp(),
  },
  rollUp: function() {
    return this.tableKeysValues[(new rpgDiceRoller.DiceRoll(this.dieType)).total];
  }
};

// tableRange (2D) entity generator - similar to randTable but using a range of values
let aeg2 = {
  entityTitle: 'Random Weather Table',
  genType: 'tableRange',
  dieType: 'd%',
  tableKeysValues: {
    1: {
      genType: 'numRange',
      lower: 1,
      upper: 33,
      entityType: 'cloudy day',
    },
    2: {
      genType: 'numRange',
      lower: 34,
      upper: 66,
      entityType: 'sunny day',
    },
    3: {
      genType: 'numRange',
      lower: 67,
      upper: 100,
      entityType: 'tornado!',
    }
  },
  rollUp: function() {
    let roll = (new rpgDiceRoller.DiceRoll(this.dieType)).total;
    let result = '';

    for(let i = 1; i <= Object.keys(this.tableKeysValues).length; i++) {
      if ((roll >= this.tableKeysValues[i].lower) && (roll <= this.tableKeysValues[i].upper)) {
        result = this.tableKeysValues[i].entityType;
      }
    }

    return result;
  }
};


//console.log(beg1.rollUp());
//console.log(aeg1.rollUp());

console.log(aeg2.rollUp());
