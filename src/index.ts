import seedrandom from "seedrandom";

/** @description Class to generate avatars  */
export class AvatarGenerator {
  constructor() {}
  /** @description Generates random avatar image URL
   * @returns Random avatar image URL
   */
  generateRandomAvatar(seed?: string) {
    let options = this.generateRandomOptions(seed);
    let url: string = "https://avataaars.io/?accessoriesType=";
    Object.keys(options).forEach((key, index, optionsList) => {
      if (index === 0) url += key + "=" + optionsList[index];
      else url += "&" + key + "=" + optionsList[index];
    });
    return url;
  }
  /** @description Generates random avatar options using provided seed
   * @returns avatar options with the following format
   * {
   * accessoriesType: string, clotheColor: string,clotheType: string;
      eyeType: string, eyebrowType: string, acialHairColor: string;
      facialHairType: string, hairColor: string, hatColor: string;
      mouthType: string, skinColor: string, topType: string;
    }
   */
  generateRandomOptions(seed?: string) {
    let topTypeOptions = new Array<string>();
    topTypeOptions.push(
      "NoHair",
      "Eyepatch",
      "Hat",
      "Hijab",
      "Turban",
      "WinterHat1",
      "WinterHat2",
      "WinterHat3",
      "WinterHat4",
      "LongHairBigHair",
      "LongHairBob",
      "LongHairBun",
      "LongHairCurly",
      "LongHairCurvy",
      "LongHairDreads",
      "LongHairFrida",
      "LongHairFro",
      "LongHairFroBand",
      "LongHairNotTooLong",
      "LongHairShavedSides",
      "LongHairMiaWallace",
      "LongHairStraight",
      "LongHairStraight2",
      "LongHairStraightStrand",
      "ShortHairDreads01",
      "ShortHairDreads02",
      "ShortHairFrizzle",
      "ShortHairShaggyMullet",
      "ShortHairShortCurly",
      "ShortHairShortFlat",
      "ShortHairShortRound",
      "ShortHairShortWaved",
      "ShortHairSides",
      "ShortHairTheCaesar",
      "ShortHairTheCaesarSidePart"
    );

    let accessoriesTypeOptions = new Array<string>();
    accessoriesTypeOptions.push(
      "Blank",
      "Kurt",
      "Prescription01",
      "Prescription02",
      "Round",
      "Sunglasses",
      "Wayfarers"
    );

    let facialHairTypeOptions = new Array<string>();
    facialHairTypeOptions.push(
      "Blank",
      "BeardMedium",
      "BeardLight",
      "BeardMagestic",
      "MoustacheFancy",
      "MoustacheMagnum"
    );

    let facialHairColorOptions = new Array<string>();
    facialHairColorOptions.push(
      "Auburn",
      "Black",
      "Blonde",
      "BlondeGolden",
      "Brown",
      "BrownDark",
      "Platinum",
      "Red"
    );

    let clotheTypeOptions = new Array<string>();
    clotheTypeOptions.push(
      "BlazerShirt",
      "BlazerSweater",
      "CollarSweater",
      "GraphicShirt",
      "Hoodie",
      "Overall",
      "ShirtCrewNeck",
      "ShirtScoopNeck",
      "ShirtVNeck"
    );

    let eyeTypeOptions = new Array<string>();
    eyeTypeOptions.push(
      "Close",
      "Cry",
      "Default",
      "Dizzy",
      "EyeRoll",
      "Happy",
      "Hearts",
      "Side",
      "Squint",
      "Surprised",
      "Wink",
      "WinkWacky"
    );

    let eyebrowTypeOptions = new Array<string>();
    eyebrowTypeOptions.push(
      "Angry",
      "AngryNatural",
      "Default",
      "DefaultNatural",
      "FlatNatural",
      "RaisedExcited",
      "RaisedExcitedNatural",
      "SadConcerned",
      "SadConcernedNatural",
      "UnibrowNatural",
      "UpDown",
      "UpDownNatural"
    );

    let mouthTypeOptions = new Array<string>();
    mouthTypeOptions.push(
      "Concerned",
      "Default",
      "Disbelief",
      "Eating",
      "Grimace",
      "Sad",
      "ScreamOpen",
      "Serious",
      "Smile",
      "Tongue",
      "Twinkle",
      "Vomit"
    );

    let skinColorOptions = new Array<string>();
    skinColorOptions.push(
      "Tanned",
      "Yellow",
      "Pale",
      "Light",
      "Brown",
      "DarkBrown",
      "Black"
    );

    let hairColorTypes = new Array<string>();
    hairColorTypes.push(
      "Auburn",
      "Black",
      "Blonde",
      "BlondeGolden",
      "Brown",
      "BrownDark",
      "PastelPink",
      "Platinum",
      "Red",
      "SilverGray"
    );

    let hatColorOptions = new Array<string>();
    hatColorOptions.push(
      "Black",
      "Blue01",
      "Blue02",
      "Blue03",
      "Gray01",
      "Gray02",
      "Heather",
      "PastelBlue",
      "PastelGreen",
      "PastelOrange",
      "PastelRed",
      "PastelYellow",
      "Pink",
      "Red",
      "White"
    );

    let clotheColorOptions = new Array<string>();
    clotheColorOptions.push(
      "Black",
      "Blue01",
      "Blue02",
      "Blue03",
      "Gray01",
      "Gray02",
      "Heather",
      "PastelBlue",
      "PastelGreen",
      "PastelOrange",
      "PastelRed",
      "PastelYellow",
      "Pink",
      "Red",
      "White"
    );

    const rng = seed ? seedrandom(seed) : seedrandom();

    let options: {
      accessoriesType: string;
      clotheColor: string;
      clotheType: string;
      eyeType: string;
      eyebrowType: string;
      facialHairColor: string;
      facialHairType: string;
      hairColor: string;
      hatColor: string;
      mouthType: string;
      skinColor: string;
      topType: string;
    } = {
      accessoriesType:
        accessoriesTypeOptions[
          Math.floor(rng() * accessoriesTypeOptions.length)
        ],
      clotheColor:
        accessoriesTypeOptions[
          Math.floor(rng() * accessoriesTypeOptions.length)
        ],
      clotheType:
        clotheTypeOptions[Math.floor(rng() * clotheTypeOptions.length)],
      eyeType: eyeTypeOptions[Math.floor(rng() * eyeTypeOptions.length)],
      eyebrowType:
        eyebrowTypeOptions[Math.floor(rng() * eyebrowTypeOptions.length)],
      facialHairColor:
        facialHairColorOptions[
          Math.floor(rng() * facialHairColorOptions.length)
        ],
      facialHairType:
        facialHairTypeOptions[Math.floor(rng() * facialHairTypeOptions.length)],
      hairColor: hairColorTypes[Math.floor(rng() * hairColorTypes.length)],
      hatColor: hatColorOptions[Math.floor(rng() * hatColorOptions.length)],
      mouthType: mouthTypeOptions[Math.floor(rng() * mouthTypeOptions.length)],
      skinColor: skinColorOptions[Math.floor(rng() * skinColorOptions.length)],
      topType: topTypeOptions[Math.floor(rng() * topTypeOptions.length)],
    };
    return options;
  }
}
