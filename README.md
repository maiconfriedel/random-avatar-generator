# Avatar Generator

- Generates random avatars from the website https://getavataaars.com/

## Usage

```typescript
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

// Simply get a random avatar
generator.generateRandomAvatar();

// Optionally specify a seed for the avatar. e.g. for always getting the same avatar for a user id.
// With seed 'avatar', always returns https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved
generator.generateRandomAvatar('avatar');
```

### Override Options

You can also choose to remove certain options. For example:

```typescript
const generator = new AvatarGenerator({
  "mouthType": [
    "Default",
    "Grimace",
    "ScreamOpen",
    "Smile",
    "Tongue",
    "Twinkle",
  ],
});
```

# React

If you using React, please check the React Version below, which is more optimized using React components

[React Random Avatar](https://github.com/maiconfriedel/react-random-avatar)
