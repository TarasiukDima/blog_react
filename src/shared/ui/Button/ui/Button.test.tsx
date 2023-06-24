import {
  fireEvent, render, screen
} from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  const text = "TEST TEXT";
  const classNameMock = "class";
  const handler = jest.fn();

  test("button exist", () => {
    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("with class", () => {
    render(<Button className={classNameMock}>{text}</Button>);

    expect(screen.getByText(text)).toHaveClass(classNameMock);
  });

  test("with handler", () => {
    render(
      <Button className={classNameMock} onClick={handler}>
        {text}
      </Button>
    );

    const button = screen.getByText(text);
    fireEvent.click(button);
    expect(handler).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
