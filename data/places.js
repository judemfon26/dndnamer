// Month-2 generator TYPES: places and establishments rather than characters.
// Same schema as data/races.js, but `sep: " "` switches the engine into
// compound-word mode: onset and coda are whole words joined with a space
// ("Prancing" + "Pony"), each word is checked for pronounceability on its own,
// and the length ceiling is per-word rather than per-name. No gender pages.
export const PLACES = {
  tavern: {
    label: "Tavern", genre: ["place"], sep: " ",
    onset: ["Golden","Prancing","Drunken","Rusty","Laughing","Silver","Crooked","Wandering","Sleeping","Broken",
      "Salty","Merry","Weary","Dancing","Howling","Gilded","Leaky","Jolly","Roaring","Hidden",
      "Crimson","Copper","Iron","Grinning","Lucky","Hungry","Thirsty","Blind","Crowned","Bearded",
      "Tipsy","Whistling","Old","Black","Red","Green","White","Velvet","Emerald","Amber",
      "Oaken","Winking","Frosted","Hollow","Yawning","Quiet","Noble","Purple","Painted","Lonely",
      "Lazy","Mossy","Toothless","Gentle","Wicked","Burning","Smiling","Weeping","Restless","Twisted",
      "Dusty","Moonlit","Sunken","Wayward","Vagabond","Stumbling","Kindly","Bawdy","Battered","Uneven",
      "Faithful","Nodding","Eager","Ancient","Idle","Jaded","Knotted","Jeweled","Zealous","Quarrelsome"],
    mid: ["and"],
    coda: ["Pony","Dragon","Stag","Boar","Griffin","Anchor","Tankard","Cauldron","Lantern","Flagon",
      "Goblet","Oak","Raven","Kraken","Unicorn","Minstrel","Goblin","Knight","Rooster","Fox",
      "Wyvern","Barrel","Hound","Lion","Mermaid","Ogre","Owl","Serpent","Wolf","Hart",
      "Falcon","Badger","Bard","Pilgrim","Troll","Wizard","Sailor","Piper","Fiddler","Dwarf",
      "Harpy","Gargoyle","Hedgehog","Toad","Basilisk","Phoenix","Bell","Keg","Kettle","Hearth",
      "Candle","Boot","Crown","Sword","Shield","Helm","Coin","Compass","Wheel","Wagon",
      "Mule","Goose","Swan","Crow","Bear","Otter","Cat","Ferret","Pelican","Sparrow"],
    syl: [2], gendered: false,
    seeds: ["The Prancing Pony","The Green Dragon","The Leaky Cauldron","The Yawning Portal","The Slaughtered Lamb","The Admiral Benbow","The Eolian","The Drunken Huntsman"],
    lore: "Tavern names follow the oldest formula in English signage: an adjective and a creature or object, painted on a board for customers who couldn't read. <em>The Prancing Pony</em>, <em>The Green Dragon</em>, <em>The Leaky Cauldron</em> — the pattern is medieval and real. Colours (Red, Green, Golden), states of drink (Drunken, Tipsy, Weary) and heraldic beasts (Stag, Lion, Griffin) dominate because that's what a sign-painter could draw. Put <em>The</em> in front of any name below and it is ready for a signboard."
  },
};
