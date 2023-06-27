import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "../../../../entities/User";
import { IStateSchema } from "../type/stateSchema";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
