import { lazy } from "react";

// Only for study
export const ArticleEditPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./ArticleEditPage")), 1);
  })
);
