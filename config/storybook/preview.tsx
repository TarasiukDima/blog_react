import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/shared/types";
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
        icon: "globe",
        items: [
          { value: "ru", title: "Русский" },
          { value: "en", title: "English" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    LanguageDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;
