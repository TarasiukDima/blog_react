import { TestAsyncThunk } from "@/shared/lib/tests/mocks/TestAsyncThunk/TestAsyncThunk";
import { IStateSchema } from "@/app/providers/StoreProvider";
import { fetchArticleById } from "./fetchArticleById";

describe("fetchArticleById.test", () => {
  const data: DeepPartial<IStateSchema> = {
    articleDetails: {
      data: null,
      error: null,
      isLoading: false,
    }
  };

  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById, data);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById, data);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
