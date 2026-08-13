import StyleDictionary from "style-dictionary";

const themes = [
  { name: "dark", selector: ":root" },
  { name: "light", selector: '[data-theme="light"]' },
];

for (const theme of themes) {
  const styleDictionary = new StyleDictionary({
    source: [`tokens/${theme.name}.json`],
    platforms: {
      scss: {
        transformGroup: "css",
        prefix: "ee",
        buildPath: "assets/css/",
        files: [
          {
            destination: `_tokens-${theme.name}.scss`,
            format: "css/variables",
            options: { selector: theme.selector },
          },
        ],
      },
    },
  });

  await styleDictionary.buildAllPlatforms();
}

console.log("Style Dictionary generated light and dark theme tokens.");
