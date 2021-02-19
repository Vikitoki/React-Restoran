import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./components/error-boundry";
import RestoService from "./services/resto-service";
import RestoServiceContext from "./components/resto-service-context";
import App from "./components/app/";
import store from "./store/store";

import "./components/styles/style.scss";

const restoService = new RestoService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <RestoServiceContext.Provider value={restoService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RestoServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("intro")
);
