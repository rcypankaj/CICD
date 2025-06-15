module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": "./",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".cjs"],
        },
      ],
      // keep this last if you use Reanimated:
      "react-native-reanimated/plugin",
    ],
  };
};
