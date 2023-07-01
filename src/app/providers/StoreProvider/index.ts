import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore, TAppDispatch } from "./config/store";
import type {
  IStateSchema,
  IReduxStoreWithManager,
  IThunkExtraArg,
  IThunkConfig,
  TStateSchemaKey,
} from "./type";

export {
  StoreProvider,
  createReduxStore,
  IStateSchema,
  TAppDispatch,
  IReduxStoreWithManager,
  TStateSchemaKey,
};
