import { InitialState, State } from "./State";
import {
  ToggleMenuAction,
  CompleteSearchAction,
  StartSearchAction
} from "./Actions";

// Open and close menu
const ToggleMenuReducer = (state: State): State => ({
  ...state,
  menuOpen: !state.menuOpen
});

// Display loading indicator and remove old search results
const StartSearchReducer = (state: State) => ({
  ...state,
  loading: true,
  searchResults: []
});

// Hide loading indicator and display new search results
const CompleteSearchReducer = (state: State, action: any) => ({
  ...state,
  loading: false,
  searchResults: [...action.searchResults]
});

export const reducerMap: any = {
  INIT: () => InitialState,
  [ToggleMenuAction]: ToggleMenuReducer,
  [StartSearchAction]: StartSearchReducer,
  [CompleteSearchAction]: CompleteSearchReducer
};
