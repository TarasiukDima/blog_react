import { getQueryParams } from "./addQueryParams";

describe("/addQueryParams.test", () => {
  test("one params", () => {
    const params = getQueryParams({ test: "value" });
    expect(params).toEqual("?test=value");
  });

  test("two params", () => {
    const params = getQueryParams({ test: "value", test2: "value2" });
    expect(params).toEqual("?test=value&test2=value2");
  });

  test("not params", () => {
    const params = getQueryParams({});
    expect(params).toEqual("?");
  });

  test("with undefined", () => {
    const params = getQueryParams({
      test: undefined
    });
    expect(params).toEqual("?");
  });
});
