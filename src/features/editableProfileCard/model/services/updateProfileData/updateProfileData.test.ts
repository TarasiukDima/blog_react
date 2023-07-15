import { TestAsyncThunk } from "shared/lib/tests/mocks/TestAsyncThunk/TestAsyncThunk";
import { Countries } from "../../../../../entities/Countries";
import { Currency } from "../../../../../entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileErrors } from "../../consts/consts";

const data = {
  id: "1",
  first: "User",
  lastname: "Userov",
  age: 91,
  currency: Currency.RUB,
  country: Countries.Belarus,
  city: "Brest",
  username: "admin",
  avatar: "1024.png",
};

describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.reject());

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: "" },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
});
