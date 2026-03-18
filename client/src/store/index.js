import { configureStore } from "@reduxjs/toolkit";
import bindListeners from "./listeners";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
});

bindListeners(store);

export default store;
