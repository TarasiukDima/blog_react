import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./shared/config/i18n/i18n";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
);
