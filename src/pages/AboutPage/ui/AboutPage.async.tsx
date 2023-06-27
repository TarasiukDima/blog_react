import { lazy } from "react";

// Only for study
export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./AboutPage")), 1500);
  })
);
