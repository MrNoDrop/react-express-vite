import { browserHistory } from "../../../browserHistory.js";

export default (store) => {
  // Dispatch the current location on startup
  store.dispatch({
    type: "ROUTER/LOCATION_CHANGE",
    payload: browserHistory.location,
  });

  // Listen for future changes
  browserHistory.listen(({ location }) => {
    store.dispatch({
      type: "ROUTER/LOCATION_CHANGE",
      payload: location,
    });
  });
};
