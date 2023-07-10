import {
  AnyAction,
  ReducersMapObject,
  combineReducers,
  Reducer,
} from "@reduxjs/toolkit";
import { IStateSchema, TStateSchemaKey, IReducerManager, TMountedReducers } from "../type";

export const createReducerManager = (
  initialReducers: ReducersMapObject<IStateSchema>
): IReducerManager => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: Array<TStateSchemaKey> = [];
  const mountedReducers: TMountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: IStateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });

        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    add: (key: TStateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      mountedReducers[key] = true;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: TStateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      mountedReducers[key] = false;
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
};
