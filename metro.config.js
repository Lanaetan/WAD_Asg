const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const path = require('path');

const customConfig = {
  resolver: {
    extraNodeModules: {
      '~': path.resolve(__dirname, 'Asg'), // Change 'src' to your actual root folder
    },
  },
};

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), customConfig);
