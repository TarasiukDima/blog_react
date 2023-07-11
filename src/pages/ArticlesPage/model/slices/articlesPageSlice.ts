import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/StoreProvider";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { OrderVariants, TArticleOrder } from "shared/types";
import { ArticleType, ArticleView, IArticle } from "../../../../entities/Article";
import {
  ArticleSortField,
  IArticlesPageSchema,
} from "../types/articlesPageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (comment) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    limit: 4,
    hasMore: true,

    view: ArticleView.GRID,
    order: OrderVariants.ASC,
    sort: ArticleSortField.CREATED,
    search: "",
    type: ArticleType.ALL,

    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<TArticleOrder>) => {
      state.order = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view =
        (localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView) ||
        ArticleView.GRID;
      state.view = view;
      state.limit = view === ArticleView.GRID ? 12 : 4;
      state.page = 1;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }

        state.hasMore = action.payload.length >= state.limit;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
