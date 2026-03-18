import actions from "./actions/types";
import { combineReducers } from "redux";
import initialStateJSON from "./initial.state.json";

export const initialState = initialStateJSON.state;
export const initialRouterState = initialStateJSON.router;

export const stateReducer = (
  state = initialState,
  { type: currentAction, payload },
) => {
  for (let action of actions) {
    if (action.match(currentAction)) {
      if (payload) {
        return { ...state, ...payload };
      } else return state;
    }
  }
  return state;
};

export const routerReducer = (
  state = initialRouterState,
  { type: action, payload },
) => {
  return action === "ROUTER/LOCATION_CHANGE" ? { ...state, ...payload } : state;
};

export default combineReducers({ state: stateReducer, router: routerReducer });
