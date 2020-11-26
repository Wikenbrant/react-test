import path from "path";
import StyleLintWebpackPlugin from "stylelint-webpack-plugin";
import webpack from "webpack";

console.log(path.resolve(__dirname, "../../src"));

const StyleLintPlugin: webpack.WebpackPluginInstance = new StyleLintWebpackPlugin(
  {
    configFile: path.resolve(__dirname, "stylelint.config.js"),
    context: path.resolve(__dirname, "../../src"),
    files: "**/*.css",
  }
);

export default StyleLintPlugin;
