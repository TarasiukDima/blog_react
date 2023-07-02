import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  const alt = "TEST TEXT";
  const classNameMock = "class";
  const avatarUrl = "http://avatar_url/";

  test("with attributes", () => {
    render(<Avatar className={classNameMock} src={avatarUrl} alt={alt} />);

    const img = screen.getByRole("img");
    expect(img).toHaveClass(classNameMock);
    expect(img).toHaveProperty("alt", alt);
    expect(img).toHaveProperty("src", avatarUrl);
  });

  test("with default size", () => {
    render(<Avatar className={classNameMock} src={avatarUrl} alt={alt} />);

    expect(screen.getByRole("img")).toHaveStyle("width: 50px;");
  });

  test("with size", () => {
    render(<Avatar className={classNameMock} src={avatarUrl} size={100} />);

    expect(screen.getByRole("img")).toHaveStyle("width: 100px;");
  });
});
