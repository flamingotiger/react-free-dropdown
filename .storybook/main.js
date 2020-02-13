module.exports = {
  stories: ["../stories/**/*.stories.js"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        require.resolve("ts-loader"),
        require.resolve("react-docgen-typescript-loader")
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
