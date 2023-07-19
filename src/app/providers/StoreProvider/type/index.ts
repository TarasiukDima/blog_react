import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ILoginSchema } from "@/features/AuthByUsername";
import { IAddCommentFormSchema } from "@/features/addCommentForm";
import { IArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { IArticleDetailsSchema } from "@/entities/Article";
import { IArticlesPageSchema } from "@/pages/ArticlesPage";
import { IUserSchema } from "@/entities/User";
import { IScrollSchema } from "@/features/scrollSave";
import { rtkApi } from "@/shared/api/apiRTKQuery";
import { IProfileSchema } from "@/features/editableProfileCard";

export interface IStateSchema {
  user: IUserSchema;
  scroll: IScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlesPageSchema;

  articleDetailsPage?: IArticleDetailsPageSchema;
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
