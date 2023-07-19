import { IStateSchema } from "@/app/providers/StoreProvider";

export const getArticleData = (state: IStateSchema) => state.articleDetails?.data || null;
