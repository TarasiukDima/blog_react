import { Countries } from "../../../../../entities/Countries";
import { Currency } from "../../../../../entities/Currency";
import { ValidateProfileErrors } from "../../consts/consts";
import { validateProfileData } from "./validateProfileData";

describe("validateProfileData.test", () => {
  const data = {
    first: "User",
    lastname: "Userov",
    age: 91,
    currency: Currency.RUB,
    country: Countries.Belarus,
    city: "Brest",
    username: "admin",
    avatar: "1024.png",
  };

  test("success", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("without first and last name", async () => {
    const result = validateProfileData({
      ...data,
      first: "",
      lastname: "",
      username: "",
    });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test("incorrect city", async () => {
    const result = validateProfileData({ ...data, city: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
  });

  test("incorrect country", async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
  });

  test("incorrect currency", async () => {
    const result = validateProfileData({ ...data, currency: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CURRENCY]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
      ValidateProfileErrors.INCORRECT_COUNTRY,
      ValidateProfileErrors.INCORRECT_CURRENCY,
    ]);
  });
});
