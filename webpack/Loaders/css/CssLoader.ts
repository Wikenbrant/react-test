import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";

const isDevelopment = process.env.NODE_ENV === "development";

const CssLoader: webpack.RuleSetRule = {
  test: /\.css$/i,
  use: [
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: true,
        sourceMap: isDevelopment,
        importLoaders: 1,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
  ],
};

export default CssLoader;
