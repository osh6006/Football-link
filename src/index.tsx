import React from "react";
import { hydrate, render } from "react-dom";
import reportWebVitals from "./reportWebVitals";

import RootProvider from "./providers/root-provider";

import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <RootProvider />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
