import { StoryFn } from "@storybook/react";
import { IStateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { TReducersList } from "@/shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { addCommentFormReducer } from "@/features/addCommentForm/model/slices/addCommentFormSlice";
// import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";
import { articlesPageReducer } from "@/pages/ArticlesPage/model/slices/articlesPageSlice";
import { userReducer } from "@/entities/User";
import { articleReducer } from "@/entities/Article/model/slice/articleSlice";
import { scrollReducer } from "@/features/scrollSave";
import { profileReducer } from "@/features/editableProfileCard";

const defaultReducers: TReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer,
  user: userReducer,
  articlesPage: articlesPageReducer,
  scroll: scrollReducer,
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
