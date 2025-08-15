import StyleDictionary from 'style-dictionary';
import boxShadowGroups from './tokens/tier-2-usage/shadow.js';

const isHigherTierToken = (filePath) => {
  return filePath.includes('tier-2-usage') || filePath.includes('tier-3-component');
};

StyleDictionary.registerFormat({
  name: 'css/custom-variables',
  format: function ({ dictionary, platform }) {
    const cssVariables = dictionary.allTokens
      .map(token => {
        const tokenName = token.name.replace(`${platform.prefix}-`, '');
        if (isHigherTierToken(token.filePath)) {
          return `  --${platform.prefix}-theme-${tokenName}: ${token.value};`;
        }
        return `  --${platform.prefix}-${tokenName}: ${token.value};`;
      });

    // Build box-shadows as CSS custom props
    Object.entries(boxShadowGroups).forEach(([size, obj]) => {
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
