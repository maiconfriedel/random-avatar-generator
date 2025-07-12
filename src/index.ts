import seedrandom from 'seedrandom';
import defaultOptions from "./options";
import { IGenerateOptions } from "./types";

/** @description Class to generate avatars  */
export class AvatarGenerator {
  options: Record<string, string[]>;

  constructor(options: IGenerateOptions = {}) {
    this.options = { ...defaultOptions };

    for (const [key, value] of Object.entries(options)) {
      if (Array.isArray(value) && value.length > 0) {
        this.options[key] = value;
      }
    }
  }

  /** @description Generates random avatar image URL
   * @returns Random avatar image URL
   */
  generateRandomAvatar(seed?: string, avatarStyle: 'Circle' | 'Transparent' = 'Circle'): string {
    const rng = seed ? seedrandom(seed) : seedrandom();

    const urlOptions = {
      accessoriesType: this.getRandomOption(rng, this.options.accessoriesType),
      avatarStyle,
      clotheColor: this.getRandomOption(rng, this.options.clotheColor),
      clotheType: this.getRandomOption(rng, this.options.clotheType),
      eyeType: this.getRandomOption(rng, this.options.eyeType),
      eyebrowType: this.getRandomOption(rng, this.options.eyebrowType),
      facialHairColor: this.getRandomOption(rng, this.options.facialHairColor),
      facialHairType: this.getRandomOption(rng, this.options.facialHairType),
      hairColor: this.getRandomOption(rng, this.options.hairColorTypes),
      hatColor: this.getRandomOption(rng, this.options.hatColor),
      mouthType: this.getRandomOption(rng, this.options.mouthType),
      skinColor: this.getRandomOption(rng, this.options.skinColor),
      topType: this.getRandomOption(rng, this.options.topType),
    }

    return `https://avataaars.io/?${new URLSearchParams(urlOptions)}`;
  }

  getRandomOption(rng: seedrandom.prng, options: string[]): string {
    return options[Math.floor(rng() * options.length)];
  }
}
