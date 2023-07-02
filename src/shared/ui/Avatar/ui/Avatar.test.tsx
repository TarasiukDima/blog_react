import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  const alt = "TEST TEXT";
  const classNameMock = "class";

  test("with class", () => {
    render(<Avatar className={classNameMock} alt={alt} />);

    expect(screen.getByRole("img")).toHaveClass(classNameMock);
    expect(screen.getByRole("img")).toHaveProperty("alt", alt);
  });
});
