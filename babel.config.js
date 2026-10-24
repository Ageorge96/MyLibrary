module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@common": "./src/common",
          '@components': './src/common/components',
        }
      }
    ]
  ]
};
