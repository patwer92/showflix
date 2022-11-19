import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ShowsState from "./contexts/shows/ShowsState";
import AlertsState from "./contexts/alerts/AlertsState";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./sass/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShowsState>
        <AlertsState>
          <App />
        </AlertsState>
      </ShowsState>
    </BrowserRouter>
  </React.StrictMode>
);
