import React from "react";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import { Provider } from "react-redux";
import store from "./App/Redux/store";
import { ThemeProvider } from "./Theme";

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
