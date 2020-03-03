module.exports = (api) => {
  api.cache(false);
  return {
    presets: [
      "babel-preset-expo",
      "module:metro-react-native-babel-preset"
    ],
    plugins: [
      ["dotenv-import", { }]
    ]
  }
}
