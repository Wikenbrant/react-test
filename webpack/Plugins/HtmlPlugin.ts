import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const HtmlPlugin: webpack.WebpackPluginInstance = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../../public", "index.html"),
});

export default HtmlPlugin;
