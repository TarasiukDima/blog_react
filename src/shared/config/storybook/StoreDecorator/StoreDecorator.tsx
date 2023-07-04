import { StoryFn } from "@storybook/react";
import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { TReducersList } from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { userReducer } from "../../../../entities/User";
import { profileReducer } from "../../../../entities/Profile";
import { articleReducer } from "../../../../entities/Article/model/slice/articleSlice";

const defaultReducers: TReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  user: userReducer,
};

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>, asyncReducers?: TReducersList) => (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
