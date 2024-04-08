import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import RootProvider from "./providers/root-provider";

import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <RootProvider></RootProvider>
    </React.StrictMode>,
  );
} else {
  root.render(
    <React.StrictMode>
      <RootProvider></RootProvider>
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
