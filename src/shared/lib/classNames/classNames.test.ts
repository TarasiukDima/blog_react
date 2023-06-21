import { classNames } from "./classNames";

describe("classNames", () => {
  const testClassName = "test1";
  const optionsArg: { [key: string]: boolean | undefined } = {
    test2: true,
    test5: false,
    test6: undefined,
  };
  const additional = ["test3", "test4"];

  test("with one class", () => {
    expect(classNames(testClassName)).toBe(testClassName);
  });

  test("with empty args", () => {
    expect(classNames("", {}, [])).toBe("");
  });

  test("with options", () => {
    const expectStr = `${testClassName} test2`;
    expect(classNames(testClassName, optionsArg)).toBe(expectStr);
  });

  test("with additional argument", () => {
    expect(classNames(testClassName, {}, additional)).toBe(
      `${testClassName} ${additional.join(" ")}`
    );
  });

  test("with all arguments", () => {
    const expectStr = `${testClassName} ${additional.join(" ")} test2`;
    expect(classNames(testClassName, optionsArg, additional)).toBe(expectStr);
  });
});
