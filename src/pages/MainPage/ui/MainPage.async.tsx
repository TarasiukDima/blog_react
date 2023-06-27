import { lazy } from "react";

// Only for study
export const MainPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./MainPage")), 1);
  })
);
