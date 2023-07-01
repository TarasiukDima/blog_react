import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { Theme } from "shared/types";

interface IRenderOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export function renderComponent(
  component: ReactNode,
  initialOptions: IRenderOptions = {}
) {
  const { route = "/", initialState = {} } = initialOptions;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <ThemeProvider startTheme={Theme.LIGHT}>
          <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
