import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "../../../../entities/User";
import { loginReducer } from "../../../../features/AuthByUsername";
import { IStateSchema } from "../type/stateSchema";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
