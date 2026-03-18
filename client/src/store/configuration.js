import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createBrowserHistory } from "history";
import reducers from "./reducers";

export const browserHistory = createBrowserHistory();

export default (() => {
  const middlewares = applyMiddleware(thunk);
  return [reducers, middlewares];
})();
