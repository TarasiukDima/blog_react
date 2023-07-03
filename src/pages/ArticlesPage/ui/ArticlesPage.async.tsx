import { lazy } from "react";

// Only for study
export const ArticlesPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./ArticlesPage")), 1500);
  })
);
