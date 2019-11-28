/** @description Class to generate avatars  */
export class AvatarGenerator {
  constructor() {}

  /** @description Generates random avatar image URL
   * @returns Random avatar image URL
   */
  generateRandomAvatar() {
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

    return `https://avataaars.io/?accessoriesType=${
      accessoriesTypeOptions[
        Math.floor(Math.random() * accessoriesTypeOptions.length)
      ]
    }&avatarStyle=Circle&clotheColor=${
      clotheColorOptions[Math.floor(Math.random() * clotheColorOptions.length)]
    }&clotheType=${
      clotheTypeOptions[Math.floor(Math.random() * clotheTypeOptions.length)]
    }&eyeType=${
      eyeTypeOptions[Math.floor(Math.random() * eyeTypeOptions.length)]
    }&eyebrowType=${
      eyebrowTypeOptions[Math.floor(Math.random() * eyebrowTypeOptions.length)]
    }&facialHairColor=${
      facialHairColorOptions[
        Math.floor(Math.random() * facialHairColorOptions.length)
      ]
    }&facialHairType=${
      facialHairTypeOptions[
        Math.floor(Math.random() * facialHairTypeOptions.length)
      ]
    }&hairColor=${
      hairColorTypes[Math.floor(Math.random() * hairColorTypes.length)]
    }&hatColor=${
      hatColorOptions[Math.floor(Math.random() * hatColorOptions.length)]
    }&mouthType=${
      mouthTypeOptions[Math.floor(Math.random() * mouthTypeOptions.length)]
    }&skinColor=${
      skinColorOptions[Math.floor(Math.random() * skinColorOptions.length)]
    }&topType=${
      topTypeOptions[Math.floor(Math.random() * topTypeOptions.length)]
    }`;
  }
}
