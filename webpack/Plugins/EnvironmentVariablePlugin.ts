import * as webpack from "webpack";

const EnvironmentVariablePlugin: webpack.WebpackPluginInstance = new webpack.DefinePlugin(
  {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  }
);

export default EnvironmentVariablePlugin;
