const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { allowTsInNodeModules: true }
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true,
    open: true
  }
};
