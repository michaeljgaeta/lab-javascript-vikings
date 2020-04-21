// Soldier
class Soldier {
  
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  };

  attack() {
    return this.strength;
  };

  receiveDamage(damage) {
    this.health -= damage;
  };

};


// Viking
class Viking extends Soldier {
  
  constructor (name, health, strength) {
    super (health, strength);
    this.name = name;
  };

  receiveDamage(damage) {
    this.health -= damage;
    const stillAlive = this.health > 0;
    const diedInCombat = this.health <= 0;
    if (stillAlive === true) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (diedInCombat === true) {
      return `${this.name} has died in act of combat`;
    };
  };

  battleCry() {
    return 'Odin Owns You All!';
  };

};


// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    const stillAlive = this.health > 0;
    const diedInCombat = this.health <= 0;
    if (stillAlive === true) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (diedInCombat === true) {
      return 'A Saxon has died in combat';
    };
  };

};


// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(viking) {
    this.vikingArmy.push(viking);
  };

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };

  vikingAttack() {
    const saxon = this.saxonArmy[indexSaxon];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    const message = saxon.receiveDamage(viking.strength)
    
      if (saxon.health <= 0) {
        this.vikingArmy.splice(indexViking, 1);
      };
      
  }

  saxonAttack() {
    const viking = this.vikingArmy[indexViking];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    const message = viking.receiveDamage(saxon.strength)
    
      if (viking.health <= 0) {
        this.vikingArmy.splice(indexViking, 1);
      };
      
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }

  };

};