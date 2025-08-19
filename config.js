import StyleDictionary from 'style-dictionary';
import fs from 'fs';

// Import JSON file
const importJsonFile = (filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
};

// Check to see if a token is a higher tier token
const isHigherTierToken = (filePath) => {
  return filePath.includes('tier-2-usage') || filePath.includes('tier-3-component');
};

StyleDictionary.registerFormat({
  name: 'css/custom-variables',
  format: function ({ dictionary, platform }) {
    const cssVariables = [];
    dictionary.allTokens.forEach(token => {
      const tokenName = token.name.replace(`${platform.prefix}-`, '');
      if (isHigherTierToken(token.filePath)) {
        cssVariables.push(`  --${platform.prefix}-theme-${tokenName}: ${token.value};`);
      } else {
        // TODO: Work to remove Tier 1 Definition Tokens
        cssVariables.push(`  --${platform.prefix}-${tokenName}: ${token.value};`);
      }
    });

    // Build box-shadows as CSS custom props
    const boxShadowGroups = importJsonFile('./tokens/tier-1-definition/shadows.json') || {};
    Object.entries(boxShadowGroups['shadow']).forEach(([size, obj]) => {
      const boxShadow = `${obj.x.value} ${obj.y.value} ${obj.blur.value} ${obj.spread.value} ${obj.color.value};`;
      cssVariables.push(`  --${platform.prefix}-theme-box-shadow-${size}: ${boxShadow}`);
    });

    return `:root {
${cssVariables.join('\n')}
}`;
  }
});

export default {
  "source": ["tokens/**/*.json"],
  "platforms": {
    "css": {
      "prefix": "ee",
      "transformGroup": "css",
      "buildPath": "public/css/",
      "files": [
        {
          "destination": "_variables.css",
          "format": "css/custom-variables"
        }
      ]
    }
  }
}
