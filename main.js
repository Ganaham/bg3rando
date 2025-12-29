title
  Baldur's Gate 3 <br> Random Party Generator <br> Patch 8 [originCL = origin.consumableList, ""] [dndclassCL = dndclass.consumableList, ""] [meleeCL = melee.consumableList, ""] 
output
  You should do a playthrough with... <br> <br> <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br> [r = "", sr = ""] <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br>  [r = "", sr = ""] <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br>  [r = "", sr = ""] <b><u>Name:</u></b> [o = originCL.selectOne, oname = o.name.selectOne, oname][if (oname == "Tav" || oname == "The Dark Urge") {"<br> <b>Race:</b> [r = race.selectOne, r.name] <br> <b>Subrace:</b> [sr = r.subrace.selectOne, sr]"} else if (oname == "Minthara") {r = "Drow", sr = "Lolth-Sworn Drow", ""} else {""}] [if (oname == "Tav") {"<br> <b>Background:</b> [background]"} else {""}] <br> <b> Class: </b> [c = dndclassCL.selectOne, c.name] <br> <b> Subclass: </b> [sc = c.selectOne] [if (c.name == "Cleric" && oname != "Shadowheart") {" <br><b>Deity:</b> [clericgod[sc]]"} else if (oname == "Minthara") {""} else {""}] [if (c.name == "Ranger") {"<br> <b>Favoured Enemy:</b> [fe = favouredenemy]"} else {""}] <br> <b>Equipment<br>Melee:</b> [meleeComment] <br> <b>Ranged:</b> [ranged]<br> <br>

origin
  PC ^[selectTav.checked || selectDur.checked]
    name
      Tav ^[selectTav.checked]
      The Dark Urge ^[selectDur.checked]
  Astarion ^[selectAst.checked]
    name = Astarion
  Lae'zel ^[selectLae.checked]
    name = Lae'zel
  Gale ^[selectGal.checked]
    name = Gale
  Shadowheart ^[selectSha.checked]
    name = Shadowheart
  Wyll ^[selectWyl.checked]
    name = Wyll
  Karlach ^[selectKar.checked]
    name = Karlach
  Minthara ^[selectMin.checked]
    name = Minthara
  Halsin ^[selectHal.checked]
    name = Halsin
  Jaheira ^[selectJah.checked]
    name = Jaheira
  Minsc ^[selectMns.checked]
    name = Minsc
    
race
  Human
    name = Human
    subrace
      Human
  Elf
    name = Elf
    subrace
      High Elf
      Wood Elf
  Drow
    name = Drow
    subrace
      Lolth-Sworn Drow
      Seldarine Drow
  Half-Elf
    name = Half-Elf
    subrace
      High Half-Elf
      Wood Half-Elf
      Drow Half-Elf
  Half-Orc
    name = Half-Orc
    subrace
      Half-Orc
  Halfling
    name = Halfling
    subrace
      Lightfoot Halfling
      Strongheart Halfling
  Dwarf
    name = Dwarf
    subrace
      Gold Dwarf
      Shield Dwarf
      Duergar
  Gnome
    name = Gnome
    subrace
      Forest Gnome
      Deep Gnome
      Rock Gnome
  Tiefling
    name = Tiefling
    subrace
      Asmodeus Tiefling
      Mephistopheles Tiefling
      Zariel Tiefling
  Githyanki
    name = Githyanki
    subrace
      Githyanki
  Dragonborn
    name = Dragonborn
    subrace
      Black Dragonborn
      Blue Dragonborn
      Brass Dragonborn
      Bronze Dragonborn
      Copper Dragonborn
      Gold Dragonborn
      Green Dragonborn
      Red Dragonborn
      Silver Dragonborn
      White Dragonborn

dndclass
  Barbarian
    name = Barbarian
    subclass
      Berserker
      Wild Magic
      Wildheart
      Giant Barbarian
  Bard
    name = Bard
    subclass
      College of Lore
      College of Swords
      College of Valour
      College of Glamour
  Cleric
    name = Cleric
    Knowledge Domain
      name = Knowledge Domain
    Life Domain
      name = Life Domain
    Light Domain
      name = Light Domain
    Nature Domain
      name = Nature Domain
    Tempest Domain
      name = Tempest Domain
    Trickery Domain ^[if (sr == "Lolth-Sworn Drow" || o.name == "Shadowheart") {9999999999} else {1}]
      name = Trickery Domain
    War Domain ^[if (sr == "Lolth-Sworn Drow") {9999999999} else {1}]
      name = War Domain
    Death Domain ^[if (o.name == "Shadowheart") {9999999999} else {1}]
      name = Death Domain
  Druid
    name = Druid
    subclass
      Circle of the Land
      Circle of the Moon
      Circle of the Spores
      Circle of the Stars
  Fighter
    name = Fighter
    subclass
      Battle Master
      Champion
      Eldritch Knight
      Arcane Archer
  Monk
    name = Monk
    subclass
      Way of the Open Hand
      Way of Shadow
      Way of the Four Elements
      Way of the Drunken Master
  Paladin
    name = Paladin
    subclass
      Oath of the Ancients
      Oath of Devotion
      Oath of Vengeance
      Oath of the Crown
      Oathbreaker
  Ranger
    name = Ranger
    subclass
      Hunter
      Beast Master
      Gloom Stalker
      Swarmkeeper
  Rogue
    name = Rogue
    subclass
      Arcane Trickster
      Thief
      Assassin
      Swashbuckler
  Sorcerer
    name = Sorcerer
    subclass
      Draconic Bloodline
      Wild Magic
      Storm Sorcery
      Shadow Magic
  Warlock
    name = Warlock
    subclass
      The Archfey
      The Fiend
      The Great Old One
      Hexblade
  Wizard
    name = Wizard
    subclass
      Abjuration School
      Conjuration School
      Divination School
      Enchantment School
      Evocation School
      Illusion School
      Necromancy School
      Transmutation School
      Bladesinger
	
clericgod
  Knowledge Domain
    Vlaakith ^[if (sr == "Githyanki" || oname == "Lae'zel") {9} else {0}]
    Moradin ^[if (r == "Dwarf") {4} else {0.2}]
    Mystra
    Oghma
    Selûne
  Life Domain
    Vlaakith ^[if (sr == "Githyanki" || oname == "Lae'zel") {15} else {0}]
    Bahamut ^[if (r == "Dragonborn") {4} else {1}]
    Corellon Larethian ^[if (r == "Elf" || oname == "Astarion" || oname == "Halsin") {4} else if (sr == "High Half-Elf" || sr == "Wood Half-Elf" || oname == "Jaheira") {2} else {0.2}]
    Eilistraee ^[if (r == "Drow") {11} else if (sr == "Drow Half-Elf") {9} else {0.2}]
    Helm
    Ilmater
    Lathander
    Selûne
    Yondalla ^[if (r == "Halfling") {11} else {0.2}]
  Light Domain
    Vlaakith ^[if (sr == "Githyanki" || oname == "Lae'zel") {9} else {0}]
    Corellon Larethian ^[if (r == "Elf" || oname == "Astarion" || oname == "Halsin") {4} else if (sr == "High Half-Elf" || sr == "Wood Half-Elf" || oname == "Jaheira") {2} else {0.2}]
    Eilistraee ^[if (r == "Drow") {9} else if (sr == "Drow Half-Elf") {4} else {0.2}]
    Helm
    Lathander
  Nature Domain
    Vlaakith ^[if (sr == "Githyanki" || oname == "Lae'zel") {9} else {0}]
    Eilistraee ^[if (r == "Drow") {9} else if (sr == "Drow Half-Elf") {4} else {0.2}]
    Mielikki
  Tempest Domain
    Vlaakith ^[if (sr == "Githyanki" || oname == "Lae'zel") {9} else {0}]
    Gruumsh ^[if (r == "Half-Orc") {4} else {0.2}]
    Talos
  Trickery Domain
    Vlaakith ^[if (sr == "Githyanki" || oname == "Lae'zel") {9} else {0}]
    Garl Glittergold ^[if (r == "Gnome") {4} else {0.2}]
    Lolth ^[if (sr == "Lolth-Sworn Drow") {9999999999} else if (sr == "Seldarine Drow") {0} else {0.2}]
    Tiamat ^[if (r == "Dragonborn") {4} else {1}]
    Tymora
  War Domain
    Vlaakith ^[if (sr == "Githyanki" || oname == "Lae'zel") {9} else {0}]
    Bahamut ^[if (r == "Dragonborn") {4} else {1}]
    Corellon Larethian ^[if (r == "Elf" || oname == "Astarion" || oname == "Halsin") {4} else if (sr == "High Half-Elf" || sr == "Wood Half-Elf" || oname == "Jaheira") {2} else {0.2}]
    Gruumsh ^[if (r == "Half-Orc") {4} else {0.2}]
    Lolth ^[if (sr == "Lolth-Sworn Drow") {9999999999} else if (sr == "Seldarine Drow") {0} else {0.2}]
    Tempus
    Tyr
  Death Domain
    Kelemvor
    Laduguer
  
background
  Acolyte
  Charlatan
  Criminal
  Entertainer
  Folk Hero
  Guild Artisan
  Noble
  Outlander
  Sage
  Soldier
  Urchin
  
favouredenemy
  Bounty Hunter
  Keeper of the Veil
  Mage Breaker
  Ranger Knight
  Sanctified Stalker
  
melee
  light
    dagger
    handaxe ^[r == "Dwarf" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
    light hammer ^[r == "Dwarf" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
    sickle ^[c.name != "Sorcerer" && c.name != "Wizard"]
    scimitar ^[c.name == "Barbarian" || c.name == "Druid" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "College of Swords"]
    shortsword ^[r == "Drow" || oname == "Minthara" || r == "Elf" || oname == "Astarion" || oname == "Halsin" || r == "Githyanki" || oname == "Lae'zel" || c.name == "Barbarian" || c.name == "Bard" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Rogue"]
  onehand
    club ^[c.name != "Sorcerer" && c.name != "Wizard"]
    dagger
    handaxe ^[r == "Dwarf" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
    javelin ^[c.name != "Sorcerer" && c.name != "Wizard"]
    light hammer ^[r == "Dwarf" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
    mace ^[c.name != "Sorcerer" && c.name != "Wizard"]
    sickle ^[c.name != "Sorcerer" && (c.name != "Wizard" || sc == "Bladesinger")]
    quarterstaff
    spear ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || (c.name != "Sorcerer" && c.name != "Wizard")]
    flail ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    morningstar ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    rapier ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Bard" || c.name == "Rogue" || r == "Drow" || oname == "Minthara" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    scimitar ^[c.name == "Barbarian" || c.name == "Druid" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "College of Swords" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    shortsword ^[r == "Drow" || oname == "Minthara" || r == "Elf" || oname == "Astarion" || oname == "Halsin" || r == "Githyanki" || oname == "Lae'zel" || c.name == "Barbarian" || c.name == "Bard" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Rogue" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    war pick ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    battleaxe ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Dwarf" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    longsword ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Bard" || c.name == "Rogue" || r == "Elf" || oname == "Astarion" || oname == "Halsin" || r == "Githyanki" || oname == "Lae'zel" || sc == "Bladesinger" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    trident ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    warhammer ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Dwarf" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
  twohand
    quarterstaff
    spear ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || (c.name != "Sorcerer" && c.name != "Wizard")]
    greatclub ^[c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid"]
    battleaxe ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Dwarf" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    longsword ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Bard" || c.name == "Rogue" || r == "Elf" || oname == "Astarion" || oname == "Halsin" || r == "Githyanki" || oname == "Lae'zel" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    trident ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    warhammer ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Dwarf" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    glaive ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    greataxe ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    greatsword  ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || r == "Githyanki" || oname == "Lae'zel" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    halberd ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    maul ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
    pike ^[r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
  
ranged
  Hand crossbows ^[r == "Drow" || oname == "Minthara" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || c.name == "Bard" || c.name == "Rogue" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
  A light crossbow ^[c.name != "Druid"]
  A shortbow ^[r == "Elf" || oname == "Astarion" || oname != "Halsin" || (c.name != "Sorcerer" && c.name != "Wizard" && c.name != "Druid")]
  A heavy crossbow ^[c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc.name == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
  A longbow ^[r == "Elf" || oname == "Astarion" || oname != "Halsin" || c.name == "Barbarian" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || sc == "College of Valour" || sc == "Hexblade" || sc == "Death Domain" || sc == "Tempest Domain" || sc == "War Domain"]
  Druids get no ranged proficiencies! ^[c.name == "Druid" &&  r != "Drow" && oname != "Minthara" && r != "Elf" && oname != "Astarion" && oname != "Halsin"]
  
meleeComment
  Dual-wielded [meleeCL.light]s ^[if (c.name == "Fighter" || c.name == "Ranger" || sc == "College of Swords") {5} else {1}]
  Dual-wielding {a} [meleeCL.light.consumableList.selectMany(2).joinItems(" and {a} ")] ^[if (c.name == "Fighter" || c.name == "Ranger" || sc == "College of Swords") {5} else {1}]
  A [meleeCL.onehand]
  A [meleeCL.onehand] and a shield  ^[if (c.name == "Fighter" || c.name == "Paladin") {5} else if (c.name == "Barbarian" || c.name == "Cleric" || c.name == "Druid" || c.name == "Fighter" || c.name == "Paladin" || c.name == "Ranger" || r == "Half-Elf" || oname == "Jaheira" || oname == "Shadowheart" || r == "Human" || oname == "Gale" || oname == "Wyll" || oname == "Minsc" || sc == "College of Valour" || sc == "Hexblade") {1} else {0}]
  A [meleeCL.twohand] ^[if (c.name == "Fighter" || c.name == "Paladin") {5} else {1}]
