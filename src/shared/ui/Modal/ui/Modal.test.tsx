import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  const text = "TEST TEXT";
  const classNameMock = "class";
  const handler = jest.fn();

  test("Modal exist", () => {
    render(<Modal isOpen closeModalHandler={handler}>{text}</Modal>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  // test("with class", () => {
  //   render(<Modal className={classNameMock} isOpen closeModal={handler}>{text}</Modal>);

  //   expect(screen.getByDisplayValue(text)).toHaveClass(classNameMock);
  // });
});
