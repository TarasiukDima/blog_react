import path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-react-i18next",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    // name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../../public"],
  docs: { autodocs: "tag" },
  webpackFinal: async (config: webpack.Configuration) => {
    if (config?.resolve) {
      // to check the src folder first
      config.resolve.modules = [
        path.resolve(__dirname, "..", "..", "src"),
        "node_modules",
      ];

      if (config.resolve.extensions) {
        config.resolve.extensions.push(".ts", ".tsx");
      }
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    if (config?.module?.rules) {
      // eslint-disable-next-line no-param-reassign
      config.module.rules = (config.module.rules as Array<RuleSetRule>).map(
        (rule: RuleSetRule) => {
          if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }

          return rule;
        }
      );

      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      config.module.rules.push(buildCssLoader(true));
    }

    if (config?.plugins) {
      config.plugins.push(
        new DefinePlugin({
          __IS_DEV__: true,
        })
      );
    }

    return config;
  },
};
export default config;
