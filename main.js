const { isValidElement } = require("react");

const origins = [
  { id: "tav", name: "Tav", isCustom: true },
  { id: "durge", name: "Dark Urge", isCustom: true },
  { id: "astarion", name: "Astarion", fixedRace: "Elf", fixedSubrace: "High Elf" },
  { id: "laezel", name: "Lae'zel", fixedRace: "Githyanki" },
  { id: "gale", name: "Gale", fixedRace: "Human", fixedSubrace: "Human" },
  { id: "shadowheart", name: "Shadowheart", fixedRace: "Half Elf", fixedSubrace: "High Half Elf" },
  { id: "wyll", name: "Wyll", fixedRace: "Human" },
  { id: "karlach", name: "Karlach", fixedRace: "Tiefling", fixedSubrace: "Zariel Tiefling" },
  { id: "halsin", name: "Halsin", fixedRace: "Elf", fixedSubrace: "Wood Elf", lateGame: true },
  { id: "minthara", name: "Minthara", fixedRace: "Drow", fixedSubrace: "Lolth Sworn Drow", lateGame: true },
  { id: "jaheira", name: "Jaheira", fixedRace: "Half Elf", fixedSubrace: "High Half Elf", lateGame: true },
  { id: "minsc", name: "Minsc", fixedRace: "Human", lateGame: true }
]

// TODO: Enforce mutual exclusivity between Tav and Durge

const races = [
  { id: "human", name: "Human", subrace: ["Human"]},
  { id: "elf", name: "Elf", subrace: ["High Elf", "Wood Elf"]},
  { id: "drow", name: "Drow", subrace: ["Lolth Sworn Drow", "Seldarine Drow"]},
  { id: "halfelf", name: "Half Elf", subrace: ["High Half Elf", "Wood Half Elf", "Drow Half Elf"]},
  { id: "halforc", name: "Half Orc", subrace: ["Half Orc"]},
  { id: "halfling", name: "Halfling", subrace: ["Lightfoot Halfling", "Strongheart Halfling"]},
  { id: "dwarf", name: "Dwarf", subrace: ["Gold Dwarf", "Shield Dwarf", "Duergar"]},
  { id: "gnome", name: "Gnome", subrace: ["Forest Gnome", "Deep Gnome", "Rock Gnome"]},
  { id: "tiefling", name: "Tiefling", subrace: ["Asmodeus Tiefling", "Mephistopheles Tiefling", "Zariel Tiefling"]},
  { id: "githyanki", name: "Githyanki", subrace: ["Githyanki"]},
  { id: "dragonborn", name: "Dragonborn", subrace: ["Black Dragonborn", "Blue Dragonborn", "Brass Dragonborn", "Bronze Dragonborn", "Copper Dragonborn",
    "Gold Dragonborn", "Green Dragonborn", "Red Dragonborn", "Silver Dragonborn", "White Dragonborn"]
  },
]

const dndclass = [
  { id: "barbarian", name: "Barbarian", subclass: ["Berserker", "Wild Magic", "Wildheart", "Giant"]},
  { id: "bard", name: "Bard", subclass: ["College of Lore", "College of Swords", "College of Valour", "College of Glamour"]},
  { id: "cleric", name: "Cleric", subclass: ["Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", "Tempest Domain", "Trickery Domain", "War Domain", "Death Domain"]},
  { id: "druid", name: "Druid", subclass: ["Circle of the Land", "Circle of the Moon", "Circle of the Spores", "Circle of the Stars"]},
  { id: "fighter", name: "Fighter", subclass: ["Battle Master", "Champion", "Eldritch Knight", "Arcane Archer"]},
  { id: "monk", name: "Monk", subclass: ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements", "Way of the Drunken Master"]},
  { id: "paladin", name: "Paladin", subclass: ["Oath of the Ancients", "Oath of Devotion", "Oath of Vengeance", "Oath of the Crown", "Oathbreaker"]},
  { id: "ranger", name: "Ranger", subclass: ["Hunter", "Beast Master", "Gloom Stalker", "Swarmkeeper"]},
  { id: "rogue", name: "Rogue", subclass: ["Arcane Trickster", "Thief", "Assassin", "Swashbuckler"]},
  { id: "sorcerer", name: "Sorcerer", subclass: ["Draconic Bloodline", "Wild Magic", "Storm Sorcery", "Shadow Magic"]},
  { id: "warlock", name: "Warlock", subclass: ["The Archfey", "The Fiend", "The Great Old One", "Hexblade"]},
  { id: "wizard", name: "Wizard", subclass: ["Abjuration School", "Conjuration School", "Divination School", "Enchantment School", "Evocation School", "Illusion School", "Necromancy School", "Transmutation School", "Bladesinger"]},
  // Decided not to include weapon proficiency data with classes - see requirements derivation file for more details
]

// TODO: Incorporate conditionals regarding Shadowheart and Lolth-Sworn Drow only being able to select certain cleric domains

const clericGods = {
  "Knowledge Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { 
      name: "Moradin", 
      getWeight: (c) => (c.race === "Dwarf") ? 4 : 0.2 
    },
    { name: "Mystra", getWeight: () => 1 },
    { name: "Oghma", getWeight: () => 1 },
    { name: "Selûne", getWeight: () => 1 }
  ],

  "Life Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { 
      name: "Bahamut", 
      getWeight: (c) => (c.race === "Dragonborn") ? 4 : 1 
    },
    { 
      name: "Corellon Larethian", 
      getWeight: (c) => {
        if (c.race === "Elf" || ["Astarion", "Halsin"].includes(c.originName)) return 4;
        if (["High Half-Elf", "Wood Half-Elf"].includes(c.subrace) || c.originName === "Jaheira") return 2;
        return 0.2;
      }
    },
    { 
      name: "Eilistraee", 
      getWeight: (c) => {
        if (c.race === "Drow") return 11;
        if (c.subrace === "Drow Half-Elf") return 9;
        return 0.2;
      }
    },
    { name: "Helm", getWeight: () => 1 },
    { name: "Ilmater", getWeight: () => 1 },
    { name: "Lathander", getWeight: () => 1 },
    { name: "Selûne", getWeight: () => 1 },
    { 
      name: "Yondalla", 
      getWeight: (c) => (c.race === "Halfling") ? 11 : 0.2 
    }
  ],

  "Light Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { 
      name: "Corellon Larethian", 
      getWeight: (c) => {
        if (c.race === "Elf" || ["Astarion", "Halsin"].includes(c.originName)) return 4;
        if (["High Half-Elf", "Wood Half-Elf"].includes(c.subrace) || c.originName === "Jaheira") return 2;
        return 0.2;
      }
    },
    { 
      name: "Eilistraee", 
      getWeight: (c) => {
        if (c.race === "Drow") return 9;
        if (c.subrace === "Drow Half-Elf") return 4;
        return 0.2;
      }
    },
    { name: "Helm", getWeight: () => 1 },
    { name: "Lathander", getWeight: () => 1 }
  ],

  "Nature Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { 
      name: "Eilistraee", 
      getWeight: (c) => {
        if (c.race === "Drow") return 9;
        if (c.subrace === "Drow Half-Elf") return 4;
        return 0.2;
      }
    },
    { name: "Mielikki", getWeight: () => 1 }
  ],

  "Tempest Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { 
      name: "Gruumsh", 
      getWeight: (c) => (c.race === "Half-Orc") ? 4 : 0.2 
    },
    { name: "Talos", getWeight: () => 1 }
  ],

  "Trickery Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { 
      name: "Garl Glittergold", 
      getWeight: (c) => (c.race === "Gnome") ? 4 : 0.2 
    },
    { 
      name: "Lolth", 
      getWeight: (c) => {
        if (c.subrace === "Lolth-Sworn Drow") return 9999; // Almost guaranteed
        if (c.subrace === "Seldarine Drow") return 0; // Impossible
        return 0.2;
      }
    },
    { 
      name: "Tiamat", 
      getWeight: (c) => (c.race === "Dragonborn") ? 4 : 1 
    },
    { name: "Tymora", getWeight: () => 1 }
  ],

  "War Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { 
      name: "Bahamut", 
      getWeight: (c) => (c.race === "Dragonborn") ? 4 : 1 
    },
    { 
      name: "Corellon Larethian", 
      getWeight: (c) => {
        if (c.race === "Elf" || ["Astarion", "Halsin"].includes(c.originName)) return 4;
        if (["High Half-Elf", "Wood Half-Elf"].includes(c.subrace) || c.originName === "Jaheira") return 2;
        return 0.2;
      }
    },
    { 
      name: "Gruumsh", 
      getWeight: (c) => (c.race === "Half-Orc") ? 4 : 0.2 
    },
    { 
      name: "Lolth", 
      getWeight: (c) => {
        if (c.subrace === "Lolth-Sworn Drow") return 9999; 
        if (c.subrace === "Seldarine Drow") return 0; 
        return 0.2;
      }
    },
    { name: "Tempus", getWeight: () => 1 },
    { name: "Tyr", getWeight: () => 1 }
  ],
  
  "Death Domain": [
    { 
      name: "Vlaakith", 
      getWeight: (c) => (c.subrace === "Githyanki" || c.originName === "Lae'zel") ? 9 : 0 
    },
    { name: "Kelemvor", getWeight: () => 1 },
    { 
      name: "Laduguer", 
      getWeight: (c) => (c.subrace === "Duergar") ? 4 : 0  
    } 
  ]
};

// Reminder that only Tav cares about this, Durge has custom background
backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Noble", "Outlander", "Sage", "Soldier", "Urchin"]

// This is only relevant to rangers, honestly uncertain about it being necessary but I guess it's like a pseudo-subclass
favoredenemy = ["Bounty Hunter", "Keeper of the Veil", "Mage Breaker", "Ranger Knight", "Sanctified Stalker"]

// This is here because if we're doing favored enemy we might as well do the other pseudo-subclass choice. 
// I'm considering being nice and only picking Blade if you don't roll Hexblade, but technically Summon Pact Weapon has hexblade exclusives so hey let it happen
warlockpact = ["Pact of the Chain", "Pact of the Blade", "Pact of the Tome"]

// title
//   Baldur's Gate 3 <br> Random Party Generator <br> Patch 8 [originCL = origin.consumableList, ""] [dndclassCL = dndclass.consumableList, ""] [meleeCL = melee.consumableList, ""] 
// output
//   You should do a playthrough with... <br> <br> <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br> [r = "", sr = ""] <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br>  [r = "", sr = ""] <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br>  [r = "", sr = ""] <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br>
  
// INVENTORY OF RACES THAT AFFECT WEAPON PROFICIENCIES
// (https://bg3.wiki/wiki/Weapons#Proficiencies_granted_by_Race_and_Class)
// Elf
// Dwarf
// Githyanki
// Human/Half Elf
// Drow

// INVENTORY OF SUBCLASSES THAT AFFECT WEAPON PROFICIENCIES
// College of Valour
// College of Swords
// Death Domain
// Tempest Domain
// War Domain
// Bladesinger
  
const martialClasses = ["Barbarian", "Fighter", "Paladin", "Ranger"];
const martialSubclasses = ["College of Valour", "Hexblade", "Death Domain", "Tempest Domain", "War Domain"];

const weaponDatabase = [
    // --- MELEE: LIGHT ---
    { 
      name: "Dagger", 
      type: "light", 
      finesse: true,
      isValid: (char) => true // Everyone can use daggers
    },
    { 
      name: "Handaxe", 
      type: "light", 
      isValid: (char) => {
        if (char.race.name === "Dwarf") return true;
        return !["Sorcerer", "Wizard", "Druid"].includes(char.dndclass.name);
      }
    },
    { 
      name: "Light Hammer", 
      type: "light", 
      isValid: (char) => {
        if (char.race.name === "Dwarf") return true;
        return !["Sorcerer", "Wizard", "Druid"].includes(char.dndclass.name);
      }
    },
        { 
      name: "Sickle", 
      type: "light", 
      finesse: true,
      isValid: (char) => {
        return !["Sorcerer", "Wizard", "Druid"].includes(char.dndclass.name) || char.subclass.name == "Bladesinger";
      }
    },
        { 
      name: "Scimitar", 
      type: "light", 
      finesse: true,
      martial: true,
      isValid: (char) => {
        return martialClasses.includes(char.dndclass.name) || 
        martialSubclasses.includes(char.subclass) ||
        ["College of Swords", "Bladesinger"].includes(char.subclass) ||
        warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Shortsword", 
      type: "light", 
      finesse: true,
      martial: true,
      isValid: (char) => {
        const allowedRaces = ["Drow", "Elf", "Githyanki"];
        const allowedClasses = ["Barbarian", "Bard", "Fighter", "Paladin", "Ranger", "Rogue"];
        
        return allowedRaces.includes(char.race) || 
               allowedClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass) ||
               char.subclass === "College of Swords" ||
               warlockpact === "Pact of the Blade";
      }
    },
    // --- MELEE: ONE-HANDED ---
    { 
      name: "Club", 
      type: "onehand", 
      isValid: (char) => !["Sorcerer", "Wizard"].includes(char.dndclass.name)
    },
    { 
      name: "Javelin", 
      type: "onehand", 
      isValid: (char) => !["Sorcerer", "Wizard"].includes(char.dndclass.name)
    },
    { 
      name: "Mace", 
      type: "onehand", 
      isValid: (char) => !["Sorcerer", "Wizard"].includes(char.dndclass.name)
    },
    { 
      name: "Quarterstaff", 
      type: "onehand", 
      isValid: (char) => true //everyone can use quarterstaffs
    },
    { 
      name: "Spear", 
      type: "onehand", 
      isValid: (char) => { 
        const allowedRaces = ["Human", "Half Elf"];
        return !["Sorcerer", "Wizard"].includes(char.dndclass.name) ||
                allowedRaces.includes(char.race.name);
      }
    },
    { 
      name: "Flail", 
      type: "onehand", 
      martial: true,
      isValid: (char) => { 
        return martialClasses.includes(char.dndclass.name) || martialClasses.includes(char.subclass) ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Morningstar", 
      type: "onehand", 
      martial: true,
      isValid: (char) => { 
        return martialClasses.includes(char.dndclass.name) || martialClasses.includes(char.subclass) ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Rapier", 
      type: "onehand", 
      finesse: true,
      martial: true,
      isValid: (char) => {
        const allowedClasses = ["Barbarian", "Fighter", "Paladin", "Ranger", "Bard", "Rogue"];
        
        return allowedClasses.includes(char.dndclass.name) || 
               char.race === "Drow" || 
               martialSubclasses.includes(char.subclass) ||
               char.subclass === "Bladesinger" ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "War Pick", 
      type: "onehand", 
      martial: true,
      isValid: (char) => { 
        return martialClasses.includes(char.dndclass.name) || martialClasses.includes(char.subclass) ||
               warlockpact === "Pact of the Blade";
      }
    },    
    { 
      name: "Battleaxe", 
      type: "onehand", 
      martial: true,
      isValid: (char) => { 
        return martialClasses.includes(char.dndclass.name) || martialClasses.includes(char.subclass) || char.race.name == "Dwarf" ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Longsword", 
      type: "onehand", 
      martial: true,
      isValid: (char) => { 
        const allowedClasses = ["Barbarian", "Fighter", "Paladin", "Ranger", "Rogue", "Bard"];
        const allowedRaces = ["Elf", "Githyanki"]
        return allowedClasses.includes(char.dndclass.name) || martialClasses.includes(char.subclass) ||
               allowedRaces.includes(char.race.name) || char.subclass == "Bladesinger" ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Trident", 
      type: "onehand", 
      martial: true,
      isValid: (char) => { 
        return martialClasses.includes(char.dndclass.name) || martialClasses.includes(char.subclass) ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Warhammer", 
      type: "onehand", 
      martial: true,
      isValid: (char) => { 
        return martialClasses.includes(char.dndclass.name) || martialClasses.includes(char.subclass) || char.race.name == "Dwarf" ||
               warlockpact === "Pact of the Blade";
      }
    },
    // --- MELEE: TWO-HANDED ---
    { 
      name: "Greatclub", 
      type: "twohand", 
      isValid: (char) => {
        return !["Sorcerer", "Wizard", "Druid"].includes(char.dndclass.name);
      }
    },
    { 
      name: "Glaive", 
      type: "twohand", 
      martial: true,
      isValid: (char) => {
        const allowedRaces = ["Human", "Half Elf"];
        return martialClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass) ||
               allowedRaces.includes(char.race.name) ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Greataxe", 
      type: "twohand", 
      martial: true,
      isValid: (char) => {
        return martialClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass) ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Greatsword", 
      type: "twohand", 
      martial: true,
      isValid: (char) => {
        return martialClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass) ||
               char.race.name === "Githyanki" ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Halberd", 
      type: "twohand", 
      martial: true,
      isValid: (char) => {
        const allowedRaces = ["Human", "Half Elf"];
        return martialClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass) ||
               allowedRaces.includes(char.race.name) ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Maul", 
      type: "twohand", 
      martial: true,
      isValid: (char) => {
        return martialClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass) ||
               warlockpact === "Pact of the Blade";
      }
    },
    { 
      name: "Pike", 
      type: "twohand", 
      martial: true,
      isValid: (char) => {
        const allowedRaces = ["Human", "Half Elf"];
        return martialClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass) ||
               allowedRaces.includes(char.race.name) ||
               warlockpact === "Pact of the Blade";
      }
    },

    // --- RANGED ---
    {
      name: "Hand Crossbows",
      type: "ranged",
      martial: true,
      isValid: (char) => {
        const allowedClasses = ["Barbarian", "Fighter", "Paladin", "Ranger", "Rogue", "Bard"];
        return char.race.name === "Drow" || 
               allowedClasses.includes(char.dndclass.name) ||
               martialSubclasses.includes(char.subclass);
      }
    },
    {
      name: "A light crossbow",
      type: "ranged",
      isValid: (char) => {
        return !(char.dndclass.name === "Druid");
      }
    },
    {
      name: "A shortbow",
      type: "ranged",
      isValid: (char) => {
        return char.race.name === "Elf" || 
               !["Sorcerer", "Wizard", "Druid"].includes(char.dndclass.name);
      }
    },
    {
      name: "A heavy crossbow",
      type: "ranged",
      martial: true,
      isValid: (char) => {
        return martialClasses.includes(char.dndclass.name) || martialSubclasses.includes(char.subclass); 
      }
    },
    {
      name: "A longbow",
      type: "ranged",
      martial: true,
      isValid: (char) => {
        return race === "Elf" ||
               martialClasses.includes(char.dndclass.name) || martialSubclasses.includes(char.subclass); 
      }
    },
    {
      name: "Druids get no ranged proficiencies!",
      type: "ranged",
      isValid: (char) => {
        return char.dndclass.name === "Druid" && !["Elf", "Drow"].includes(char.race.name);
      }
    }
  ];

// melee
//   light
//     dagger
//     handaxe ^[r == "Dwarf" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
//     light hammer ^[r == "Dwarf" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
//     sickle ^[c.name != "Sorcerer" && (c.name != "Wizard" || sc == "Bladesinger")]
//     scimitar ^[c.name == "Barbarian" || c.name == "Druid" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "College of Swords" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     shortsword ^[r == "Drow" || oname == "Minthara" || r == "Elf" || oname == "Astarion" || oname == "Halsin" || r == "Githyanki" || oname == "Lae'zel" || c.name == "Barbarian" || c.name == "Bard" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Rogue" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//   onehand
//     club ^[c.name != "Sorcerer" && c.name != "Wizard"]
//     javelin ^[c.name != "Sorcerer" && c.name != "Wizard"]
//     mace ^[c.name != "Sorcerer" && c.name != "Wizard"]
//     quarterstaff
//     spear ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || (c.name != "Sorcerer" && c.name != "Wizard")]
//     flail ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     morningstar ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     rapier ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Bard" || c.name == "Rogue" || r == "Drow" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     war pick ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     battleaxe ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Dwarf" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     longsword ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Bard" || c.name == "Rogue" || r == "Elf" || oname == "Astarion" || oname == "Halsin" || r == "Githyanki" || oname == "Lae'zel" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     trident ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     warhammer ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Dwarf" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//   twohand
//     greatclub ^[c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid"]
//     glaive ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     greataxe ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     greatsword  ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Githyanki" || oname == "Lae'zel" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     halberd ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     maul ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//     pike ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
  
// ranged
//   Hand crossbows ^[r == "Drow" || oname == "Minthara" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Bard" || c.name == "Rogue" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//   A light crossbow ^[c.name != "Druid"]
//   A shortbow ^[r == "Elf" || oname == "Astarion" || oname != "Halsin" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
//   A heavy crossbow ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc.name == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//   A longbow ^[r == "Elf" || oname == "Astarion" || oname != "Halsin" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
//   Druids get no ranged proficiencies! ^[c.name == "Druid" &&  r != "Drow" && oname != "Minthara" && r != "Elf" && oname != "Astarion" && oname != "Halsin"]
  
// meleeComment
//   Dual-wielded [meleeCL.light]s ^[if (c.name == "Fighter" || c.name == "Ranger" || sc == "College of Swords") {5} else {1}]
//   Dual-wielding {a} [meleeCL.light.consumableList.selectMany(2).joinItems(" and {a} ")] ^[if (c.name == "Fighter" || c.name == "Ranger" || sc == "College of Swords") {5} else {1}]
//   A [meleeCL.onehand] (given that this is fundamentally worse than the two below options, it'd be good to have some sort of constraint that limits the likelihood of this)
//      of course there *are* weapons that are both not versatile, not martial, not two-handed, and not light. Clubs, maces, javelins. They have a place! Maybe one-hand martial no shield is just the necessary evil for if you have no shield proficiency
//      - this also means we don't need to bother with a special option for versatile weapons.
//   A [meleeCL.onehand] and a shield  ^[if (c.name == "Fighter" || c.name == "Paladin") {5} else if (c.name == "Barbarian" || c.name == "Cleric" || c.name == "Druid" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || sc == "College of Valour" || sc == "Hexblade") {1} else {0}]
//   A [meleeCL.twohand] ^[if (c.name == "Fighter" || c.name == "Paladin") {5} else {1}]

function getDeity(character) {
    // 1. If not a Cleric, or if Shadowheart/Minthara, return empty string or fixed god
    if (character.className !== "Cleric") return "";
    if (character.originName === "Shadowheart") return "Shar";
    if (character.originName === "Minthara") return "Lolth"; // Though she is usually Paladin

    // 2. Get the list of gods for this character's subclass
    const domainOptions = clericGods[character.subclass];
    
    if (!domainOptions) return "Unknown Deity";

    let totalWeight = 0;
    const weightedList = domainOptions.map(god => {
        const weight = god.getWeight(character);
        totalWeight += weight;
        return { name: god.name, weight: weight };
    });

    let randomValue = Math.random() * totalWeight;
    for (const option of weightedList) {
        if (randomValue < option.weight) {
            return option.name;
        }
        randomValue -= option.weight;
    }
    
    return weightedList[0].name;
}

// TODO: FINISH IMPROVING THE ACTUAL SELECTION, everything after Step D is untouched
function getLoadout(char) {
    const availableWeapons = weaponDatabase.filter(w => w.isValid(char));

    const meleeOptions = availableWeapons.filter(w => w.type !== "ranged");
    const rangedOptions = availableWeapons.filter(w => w.type === "ranged");

    // TODO: Filter down to finesse-only weapon if you are rogue
    // TODO: Prevent monks from using heavy (aka two handed melee weapons)

    meleeOptions = meleeOptions.filter(w => w.martial).length > 0 ? meleeOptions.filter(w => w.martial) : meleeOptions;
    rangedOptions = rangedOptions.filter(w => w.martial).length > 0 ? rangedOptions.filter(w => w.martial) : rangedOptions;
    
    const pick = (arr) => arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;

    const selectedMelee = pick(meleeOptions);
    const selectedRanged = pick(rangedOptions);

    // D. Handle "Dual Wielding" logic (Perchance: meleeComment)
    let meleeText = "";
    if (selectedMelee) {
        if (selectedMelee.type === "light") {
            // Simple 50/50 chance to dual wield if the weapon is light
            const dualWield = Math.random() > 0.5; 
            if (dualWield) {
                meleeText = `Dual-wielding ${selectedMelee.name}s`;
            } else {
                meleeText = `A ${selectedMelee.name}`;
            }
        } else if (selectedMelee.type === "onehand") {
            // 50/50 chance for shield (logic can be expanded to check proficiency)
            const useShield = Math.random() > 0.5 && !["Monk", "Barbarian"].includes(char.className); 
            meleeText = useShield ? `A ${selectedMelee.name} and a Shield` : `A ${selectedMelee.name}`;
        } else {
            meleeText = `A ${selectedMelee.name}`;
        }
    } else {
        meleeText = "Unarmed / Monk Fists";
    }

    return {
        melee: meleeText,
        ranged: selectedRanged ? selectedRanged.name : "None (or Cantrips)"
    };
  }