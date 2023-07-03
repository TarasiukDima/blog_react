import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleError = (state: IStateSchema) => state.article?.error || "";
