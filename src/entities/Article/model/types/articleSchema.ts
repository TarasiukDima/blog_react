import { IArticle } from "./article";

export interface IArticleDetailsSchema {
  isLoading: boolean;
  error?: string | null;
  data?: IArticle | null;
}
