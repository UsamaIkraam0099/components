module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@views': './src/views',
          '@assets': './src/assets',
          '@layout': './src/layout',
          '@routes': './src/routes',
          '@helpers': './src/helpers',
          '@language': './src/language',
          '@constants': './src/constants',
          '@components': './src/components',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
