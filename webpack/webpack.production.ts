import path from "path";
import webpack from "webpack";
import Common from "./webpack.common";

process.env.NODE_ENV = "production";

const config: webpack.Configuration = {
  ...Common,
  mode: "production",
};

export default config;
