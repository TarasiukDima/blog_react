import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { DeepPartial } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import { IStateSchema } from "../type/stateSchema";

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState as IStateSchema);
  return <Provider store={store}>{children}</Provider>;
};
