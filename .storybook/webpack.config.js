module.exports = ({ config }) => {
  const configRules = [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true
            }
          }
        }
      ]
    },
    {
      test:/\.css$/,
      loader:"style-loader!css-loader"
    },
    {
      test: /\.scss/, //配置sass转css
      use: [
        { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }
      ]
    }
  ]

  config.module.rules = configRules;

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
