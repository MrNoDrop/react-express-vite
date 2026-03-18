import React from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu.jsx";
import Paths from "./paths/paths.jsx";
import store from "./store";
import { browserHistory } from "./store/configuration.js";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter
        history={browserHistory}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Menu />
        <Paths />
      </HistoryRouter>
    </Provider>
  );
}

export default App;
