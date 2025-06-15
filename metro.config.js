const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { getSentryExpoConfig } = require("@sentry/react-native/metro");

const defaultConfig = getDefaultConfig(__dirname);

const config = getSentryExpoConfig(__dirname, defaultConfig);

config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  "@": __dirname,
};

config.resolver.unstable_enablePackageExports = false;

config.watchFolders = [
  ...(config.watchFolders || []),
  path.resolve(__dirname, "app"), 
  // path.resolve(__dirname, "components"), <-- add more folders if you have created more /<folder>
];

module.exports = config;
