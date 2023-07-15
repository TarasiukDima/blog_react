import { rtkApi } from "shared/api/apiRTKQuery";

const recommendationsAPi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationList: build.query({
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommendationList =
  recommendationsAPi.useGetArticleRecommendationListQuery;
