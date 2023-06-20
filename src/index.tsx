import { render } from "react-dom";
import App from "./app";
import "./shared/config/i18n/i18n";
import { Suspense } from "react";

render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.querySelector("#root")
);
