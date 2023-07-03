import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleLoading = (state: IStateSchema) => state.article?.isLoading || false;
