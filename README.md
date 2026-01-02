# bg3rando
NOT YET FUNCTIONAL

Provides a randomly generated BG3 party. 

Updated to Patch 8, vanilla game only. No plans for incorporating multiclassing.

Accounts for religious requirements for Shadowheart and Lolth Sworn Drow, and additionally includes chances for race-exclusive deities like Vlaakith, Garl Glittergold, etc.

Currently selects a random melee and ranged weapon based on items available to a character, prioritizing fighting styles. In the future, we want to provide the option to also prioritze martial weapons if a character has access to both simple weapons and martial ones, so that your fighter or paladin isn't left dual wielding sickles for instance. Similarly, we want to ensure that rogues will always use Finesse weapons in order to still allow for the usage of Sneak Attack. 

Another future change is to incorporate a roadmap for scenarios in which you get assigned an act 2 or 3 party member. For example, if you roll Halsin, you'd still probably want to have a party member filling your roster until he can join up in Act 2. This would automatically give you an additional character to fulfill this role instead of leaving you to make up the difference. 

Initial randomizer code borrowed from u/Konig92. I added/will add Patch 8 support, the more player-friendly weapon selection option, and more user-friendly solutions for if you roll a lategame party member. 

More ideas could involve other ways to become proficient with weapons that aren't inherently connected to your character classes.
I know there's equipment that gives proficiency with swords
There's probably an equipvalent for bows
Things like the Dual Wielder Feat can allow you to two-hand non-light weapons, can maybe include possibilities of two-hand feats that also use that? Would be a toggle

Really, the existence of Weapon Master means that every character can ultimately use every weapon regardless of class. This alone would make it possible to do a "no logic" sort of option where any class can be told to use any weapon, and the player can figure out how to make the difference if they get told to use something that doesn't work at level 1 or even 3. (There are, of course, other miscellaneous ways to do this without weapon master.) This would be implicitly more difficult though as it basically forces a number of classes to do a wasteful investment into the ability to use a weapon that their class isn't ordinarily designed around using. I guess they can do some sort of weird melee caster build if they really want to lean into it? 