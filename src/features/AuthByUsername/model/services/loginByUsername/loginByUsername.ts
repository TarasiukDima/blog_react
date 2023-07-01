import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { IUser, userActions } from "../../../../../entities/User";

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  IThunkConfig<string>
>(
  "login/loginByUsername",
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.post<IUser>("/login", authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setAuthData(response.data));
      // extra.navigate()

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error with login or password");
    }
  }
);
