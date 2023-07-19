import { lazy, Suspense } from "react";
import { Skeleton } from "@/shared/ui/Skeleton";
import { IArticleRatingProps } from "./ArticleRating";

const ArticleRatingLazy = lazy(() => import("./ArticleRating"));

export const ArticleRatingAsync = (props: IArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
