import { screen } from "@testing-library/react";
import { renderComponent } from "@/shared/lib/tests/renderComponent";
import { ThemeSwitcher } from "./ThemeSwitcher";

describe("ThemeSwitcher", () => {
  const classNameMock = "class";
  const classNameDark = "dark";
  const handler = jest.fn();
  const ruTitleText = "Кнопка для переключения темы.";
  const enTitleText = "Switcher theme button.";

  test("ThemeSwitcher exist", () => {
    renderComponent(<ThemeSwitcher className={classNameMock} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("with class", () => {
    renderComponent(<ThemeSwitcher className={classNameMock} />);

    expect(screen.getByRole("button")).toHaveClass(classNameMock);
  });

  // test("with attributes", () => {
  //   renderComponent(<ThemeSwitcher className={classNameMock} />);

  //   const themeSwitcher = screen.getByRole("button");

  //   expect(themeSwitcher).toHaveAttribute("aria-label", ruTitleText);
  // });

  // test("change language", async () => {
  //   renderComponent(<ThemeSwitcher className={classNameMock} />);

  //   const themeSwitcher = screen.getByRole("button");
  //   screen.debug();

  //   fireEvent.click(themeSwitcher);
  //   screen.debug();
  //   expect(themeSwitcher).toHaveClass(classNameDark);

  //   fireEvent.click(themeSwitcher);
  //   expect(themeSwitcher).not.toHaveClass(classNameDark);
  //   expect(themeSwitcher).toHaveAttribute("aria-label", enTitleText);
  //   // await waitFor(() => expect(themeSwitcher).not.toHaveClass(classNameDark))
  // });
});
