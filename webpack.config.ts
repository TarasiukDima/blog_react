import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    src: path.resolve(__dirname, "src"),
    public: "/",
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "build"),
    locales: path.resolve(__dirname, "public", "locales"),
    buildLocales: path.resolve(__dirname, "build", "locales"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const BASE_URL = env.apiUrl || "http://localhost:8000";

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl: BASE_URL,
    project: "frontend",
  });

  return config;
};
