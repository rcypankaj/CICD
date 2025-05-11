const { typescript } = require("eslint-import-resolver-typescript");
const { default: pluginImport } = require("eslint-plugin-import");
const expoConfig = require("eslint-config-expo/flat");

module.exports = [
  ...expoConfig,
  {
    plugins: {
      import: pluginImport,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json", // or tsconfig.base.json
        },
      },
    },
    rules: {
      "import/no-unresolved": "error",
    },
  },
];
