import { TestAsyncThunk } from "shared/lib/tests/mocks/TestAsyncThunk/TestAsyncThunk";
import { Countries } from "../../../../../entities/Countries";
import { Currency } from "../../../../../entities/Currency";
import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData.test", () => {
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
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
