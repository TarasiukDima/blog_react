import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleData = (state: IStateSchema) => state.article?.data || null;
