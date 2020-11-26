import path from "path";
import webpack from "webpack";
import Common from "./webpack.common";

process.env.NODE_ENV = "development";

const config: webpack.Configuration = {
  ...Common,
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    compress: true,
    port: 4000,
  },
};

export default config;
