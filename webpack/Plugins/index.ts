import webpack from "webpack";
import CleanPlugin from "./CleanPlugin";
import EnvironmentVariablePlugin from "./EnvironmentVariablePlugin";
import HtmlPlugin from "./HtmlPlugin";
import MiniCssPlugin from "./MiniCssPlugin";
import StyleLintPlugin from "./Stylelint/StylelintPlugin";

const Plugins: webpack.WebpackPluginInstance[] = [
  EnvironmentVariablePlugin,
  HtmlPlugin,
  MiniCssPlugin,
  StyleLintPlugin,
  CleanPlugin,
];

export default Plugins;
