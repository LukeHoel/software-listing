import { createStore } from "redux";
import { State } from "./State";
import { reducerMap } from "./Reducers";

// Avoid giant switch statement tree with a simple reducer Map variable
export const Reducer = (state: State, action: any) => ({
  ...(action.type in reducerMap
    ? reducerMap[action.type](state, action)
    : state)
});

// Setup to connect to devtools
export const store = createStore(
  Reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// Initialize state
store.dispatch({ type: "INIT" });
