import { IStateSchema } from "app/providers/StoreProvider";
import { Countries } from "../../../../../entities/Countries";
import { Currency } from "../../../../../entities/Currency";
import { getProfileData } from "./getProfileData";

describe("getCounter", () => {
  test("should return current state user data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: {
          first: "User",
          lastname: "Userov",
          age: 91,
          currency: "RUB" as Currency,
          country: "Belarus" as Countries,
          city: "Brest",
          username: "admin",
          avatar:
            "https://cdn1.iconfinder.com/data/icons/people-49/512/_formal_mustache_man-01-1024.png",
        },
      },
    };
    expect(getProfileData(state as IStateSchema)).toEqual(state.profile?.data);
  });

  test("should return null", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: null,
      },
    };
    expect(getProfileData(state as IStateSchema)).toEqual(null);
  });
});
