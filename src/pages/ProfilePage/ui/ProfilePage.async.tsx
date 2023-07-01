import { lazy } from "react";

// Only for study
export const ProfilePageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./ProfilePage")), 1);
  })
);
