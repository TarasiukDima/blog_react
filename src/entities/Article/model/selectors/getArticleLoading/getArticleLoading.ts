import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleLoading = (state: IStateSchema) => state.articleDetails?.isLoading || false;
