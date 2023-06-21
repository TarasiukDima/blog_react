import { Suspense } from "react";
import { render } from "react-dom";
import { App } from "./app";
import "./shared/config/i18n/i18n";

render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.querySelector("#root")
);
