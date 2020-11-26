import webpack from "webpack";

const ScssLoader: webpack.RuleSetRule = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
      },
    },
  ],
};

export default ScssLoader;
