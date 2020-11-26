import MiniCssExtractPlugin from "mini-css-extract-plugin";

const isDevelopment = process.env.NODE_ENV === "development";

const MiniCssPlugin = new MiniCssExtractPlugin({
  filename: isDevelopment ? "[name].css" : "[name].[hash].css",
  chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
});

export default MiniCssPlugin;
