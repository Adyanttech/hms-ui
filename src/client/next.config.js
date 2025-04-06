module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    sassOptions: {
      includePaths: ['src/client/styles'],
    },
    webpack(config, { isServer }) {
      // Add SCSS module support
      config.module.rules.push({
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      });

      // Add regular SCSS support
      config.module.rules.push({
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      });

      // Add regular CSS support
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });

      // Ensure resolution aligns with tsconfig.json
      config.resolve.modules.push(__dirname);

      return config;
    },
  };
};
