import { IArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { IArticleDetailsPageRecommendationsSchema } from "./ArticleDetailsPageRecommendationsSchema";

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsPageRecommendationsSchema;
}
