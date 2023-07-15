export type { IArticle } from "./model/types/article";
export type { IArticleDetailsSchema } from "./model/types/articleSchema";

export {
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from "./model/consts/consts";

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export { ArticleList } from "./ui/ArticleList/ArticleList";
export { ArticleViewSelector } from "./ui/ArticleViewSelector/ArticleViewSelector";
export { ArticleTypeTabs } from "./ui/ArticleTypeTabs/ArticleTypeTabs";

export { getArticleData } from "./model/selectors/getArticleData/getArticleData";
export { getArticleError } from "./model/selectors/getArticleError/getArticleError";
export { getArticleLoading } from "./model/selectors/getArticleLoading/getArticleLoading";
