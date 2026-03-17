import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu";
import Paths from "./paths";
import store from "./store";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
