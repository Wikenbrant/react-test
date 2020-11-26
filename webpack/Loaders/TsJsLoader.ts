import webpack from "webpack";

const TsJsLoaders: webpack.RuleSetRule[] = [
  {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            {
              regenerator: true,
            },
            "babel-plugin-ts-nameof",
          ],
        ],
      },
    },
  },
  {
    test: /\.js$/,
    use: ["source-map-loader"],
    enforce: "pre",
  },
];

export default TsJsLoaders;
