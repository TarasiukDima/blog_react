import { IRating } from "@/entities/Raiting";
import { rtkApi } from "@/shared/api/apiRTKQuery";

interface IGetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface IRateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Array<IRating>, IGetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: "/article-ratings",
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, IRateArticleArg>({
      query: (arg) => ({
        url: "/article-ratings",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
