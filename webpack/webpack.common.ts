import webpack from "webpack";
import Plugins from "./Plugins";
import Loaders from "./Loaders";
import path from "path";

const Common: webpack.Configuration = {
  target: "web",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
  },
  entry: "../src/index.tsx",
  module: {
    rules: Loaders,
  },
  plugins: Plugins,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".css"],
  },
};

export default Common;
