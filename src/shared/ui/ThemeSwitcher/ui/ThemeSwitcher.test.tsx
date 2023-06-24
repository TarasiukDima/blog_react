import { screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslations/renderWithTranslation";
import { ThemeSwitcher } from "./ThemeSwitcher";

describe("ThemeSwitcher", () => {
  const classNameMock = "class";
  const classNameDark = "dark";
  const handler = jest.fn();
  const ruTitleText = "Кнопка для переключения темы.";
  const enTitleText = "Switcher theme button.";

  test("ThemeSwitcher exist", () => {
    renderWithTranslation(<ThemeSwitcher className={classNameMock} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("with class", () => {
    renderWithTranslation(<ThemeSwitcher className={classNameMock} />);

    expect(screen.getByRole("button")).toHaveClass(classNameMock);
  });

  // test("with attributes", () => {
  //   renderWithTranslation(<ThemeSwitcher className={classNameMock} />);

  //   const themeSwitcher = screen.getByRole("button");

  //   expect(themeSwitcher).toHaveAttribute("aria-label", ruTitleText);
  // });

  // test("change language", async () => {
  //   renderWithTranslation(<ThemeSwitcher className={classNameMock} />);

  //   const themeSwitcher = screen.getByRole("button");
  //   screen.debug();

  //   fireEvent.click(themeSwitcher);
  //   await waitFor(() => expect(themeSwitcher).toHaveClass(classNameDark))

  //   fireEvent.click(themeSwitcher);
  //   await waitFor(() => expect(themeSwitcher).not.toHaveClass(classNameDark))
  // });
});
