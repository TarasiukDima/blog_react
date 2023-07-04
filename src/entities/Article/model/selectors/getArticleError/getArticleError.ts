import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleError = (state: IStateSchema) => state.articleDetails?.error || "";
