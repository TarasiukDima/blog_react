import { StoryFn } from "@storybook/react";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForStorybook";

i18n.on("languageChanged", (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

export const LanguageDecorator = (StoryComponent: StoryFn, context: any) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<>...</>}>
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
