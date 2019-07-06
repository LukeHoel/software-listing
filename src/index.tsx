import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import { CloseModalAction } from "./Store/Actions";

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );

  document.addEventListener("keydown", (e: any) => {
    // If a modal is open, close it with escape
    if (e.key === "Escape" && store.getState().modalContent !== undefined) {
      store.dispatch({ type: CloseModalAction });
    }
  });
}
