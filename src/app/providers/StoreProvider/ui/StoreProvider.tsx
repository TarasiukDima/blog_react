import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import { IStateSchema } from "../type";

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};
