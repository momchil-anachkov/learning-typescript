interface IDamagable {
  takeDamage: (damageToTake: number) => number;
}

class Character {
  protected health: number;
  constructor() {
    this.health = 100;
  }
}

class Druid extends Character implements IDamagable {
  constructor() {
    super();
    this.health = 90;
  }
  takeDamage(damageToTake: number) {
    damageToTake *= 0.9;
    this.health -= damageToTake;
    return this.health;
  }
}

class Warrior extends Character implements IDamagable {
  private armor: number;
  constructor() {
    super();
    this.health = 110;
    this.armor = 3;
  }
  takeDamage(damageToTake: number) {
    damageToTake -= this.armor;
    this.health -= damageToTake;
    return this.health;
  }
}

class Rogue extends Character implements IDamagable {
  constructor() {
    super();
  }
  takeDamage(damageToTake: number) {
    let chance = Math.random() * 100;
    if (chance > 75) {
      this.health -= damageToTake;
    }
    return this.health;
  }
}

function doDamage(target: IDamagable, damageToDo: number) {
  let healthLeft = target.takeDamage(damageToDo);
  console.log("Ouch, I only have " + healthLeft + " health left.");
}

let druid = new Druid();
let warrior = new Warrior();
let rogue = new Rogue();

doDamage(druid, 10);
doDamage(warrior, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
