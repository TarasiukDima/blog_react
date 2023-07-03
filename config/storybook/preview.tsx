import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { LanguageDecorator } from "../../src/shared/config/storybook/LanguageDecorator/LanguageDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      toolbar: {
        title: "Locale",
        dynamicTitle: true,
        icon: "globe",
        items: [
          { value: "ru", title: "Русский" },
          { value: "en", title: "English" },
        ],
        showName: true,
      },
    },
    theme: {
      name: "Theme",
      description: "Theme for the components",
      defaultValue: "light_theme",
      toolbar: {
        title: "Theme",
        dynamicTitle: true,
        icon: "circlehollow",
        items: [
          { value: "light_theme", icon: "circlehollow", title: "Light" },
          { value: "dark_theme", icon: "circle", title: "Dark" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    LanguageDecorator,
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
  ],
};

export default preview;
