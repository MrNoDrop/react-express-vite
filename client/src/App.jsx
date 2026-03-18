import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu.jsx";
import Paths from "./paths/paths.jsx";
import store from "./store";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Paths />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
