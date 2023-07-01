import { StoryFn } from "@storybook/react";
import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { TReducersList } from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { profileReducer } from "../../../../entities/Profile";

const defaultReducers: TReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};
export const StoreDecorator =
  (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: TReducersList
  ) => (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
