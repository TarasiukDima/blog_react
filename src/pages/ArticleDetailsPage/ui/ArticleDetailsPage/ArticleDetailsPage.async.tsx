import { lazy } from "react";

// Only for study
export const ArticleDetailsPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./ArticleDetailsPage")), 500);
  })
);
