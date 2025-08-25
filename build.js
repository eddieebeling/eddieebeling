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

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(theme, platform) {
  return {
    source: [
      `tokens/${theme}/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: platform,
        prefix: 'ee',
        buildPath: `public/css/${theme}/`,
        options: { "theme": "light" },
        files: [
          {
            destination: "_variables.css",
            format: "css/custom-variables"
          },
        ],
      }
    },
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES AND PLATFORMS

['light', 'dark'].map(function (theme) {
  ['css'].map(function (platform) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${theme}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(theme, platform));
    sd.registerFormat({
        name: 'css/custom-variables',
        format: function ({ dictionary, platform }) {
            const theme = platform?.options?.theme ?? 'light'; // <-- define theme
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
            const boxShadowGroups = importJsonFile(`./tokens/${theme}/tier-1-definition/shadows.json`) || {};
            Object.entries(boxShadowGroups['shadow']).forEach(([size, obj]) => {
            const boxShadow = `${obj.x.value} ${obj.y.value} ${obj.blur.value} ${obj.spread.value} ${obj.color.value};`;
            cssVariables.push(`  --${platform.prefix}-theme-box-shadow-${size}: ${boxShadow}`);
            });

            return `:root {
${cssVariables.join('\n')}
}`;
        }
        });
    sd.buildPlatform(platform);
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');