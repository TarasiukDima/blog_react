import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ILoginSchema } from "features/AuthByUsername";
import { IAddCommentFormSchema } from "features/addCommentForm";
import { IArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { IArticleDetailsSchema } from "entities/Article";
import { IArticlesPageSchema } from "pages/ArticlesPage";
import { IProfileSchema } from "entities/Profile";
import { IUserSchema } from "entities/User";
import { IScrollSchema } from "features/scrollSave";

export interface IStateSchema {
  user: IUserSchema;
  scroll: IScrollSchema;

  // async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlesPageSchema;
}

export type TStateSchemaKey = keyof IStateSchema;
export type TMountedReducers = OptionalRecord<TStateSchemaKey, boolean>;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
  getMountedReducers: () => TMountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  state: IStateSchema;
  extra: IThunkExtraArg;
  rejectValue: T;
}
