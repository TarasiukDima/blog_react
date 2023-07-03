export type { IArticle } from "./model/types/article";
export { ArticleBlockType, ArticleType } from "./model/types/article";
export type { IArticleDetailsSchema } from "./model/types/articleSchema";

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";

export { getArticleData } from "./model/selectors/getArticleData/getArticleData";
export { getArticleError } from "./model/selectors/getArticleError/getArticleError";
export { getArticleLoading } from "./model/selectors/getArticleLoading/getArticleLoading";
