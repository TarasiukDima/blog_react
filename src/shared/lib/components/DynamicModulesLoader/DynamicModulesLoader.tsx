import { FC, ReactNode, useEffect } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import {
  IReduxStoreWithManager,
  TStateSchemaKey,
} from "app/providers/StoreProvider";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";

export type TReducersList = {
  [name in TStateSchemaKey]?: Reducer;
};

interface IDynamicModulesLoaderProps {
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModulesLoader: FC<IDynamicModulesLoaderProps> = ({
  reducers,
  children,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as IReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(({ 0: name, 1: reducer }) => {
      store.reducerManager.add(name as TStateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(({ 0: name }) => {
          store.reducerManager.remove(name as TStateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};
