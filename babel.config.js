module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@components": "./components",
            "@constants": "./constants",
            "@models": "./models",
            "@navigation": "./navigation",
            "@screens": "./screen",
            "@services": "./services",
            "@store": "./store",
          },
        },
      ],
    ],
  };
};
