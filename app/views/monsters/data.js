
/**
 * Percentage chances that the monster might inflict
 * an ailment on the player during combat
 */
export class Ailments {
  constructor() {
    this.sprain = 0;
    this.arthritis = 0;
    this.blind = 0;
    this.confuse = 0;
    this.poison = 0;
    this.venom = 0;
  }
}

/**
 * Datatype of the monster data from the monster json
 * Monsters have a linear stat-growth 
 */
export class Monster {
  constructor(name) {
    this.name = name;

    // stats at level 1
    this.hp = 1;
    this.str = 0;
    this.def = 0;
    this.spd = 0;
    
    this.exp = 0;

    // stats at level 100
    this.maxhp = 1;
    this.maxstr = 1;
    this.maxdef = 1;
    this.maxspd = 1;
    this.maxexp = 1;

    // difficulty boost relative to the dungeon depth
    // determines how many items need to be traded with the monster
    this.level = 1;

    // sprite to use for the monster
    this.type = "duck";

    // strength of the shadow to be cast from the monster in the FOV
    this.density = .5;

    this.status = new Ailments();
  }
}
