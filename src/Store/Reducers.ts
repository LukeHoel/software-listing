import { InitialState, State } from "./State";
import {
  CompleteSearchAction,
  StartSearchAction,
  OpenModalAction,
  CloseModalAction
} from "./Actions";

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

// Open modal with content
const OpenModalReducer = (state: State, action: any) => ({
  ...state,
  modalContent: action.modalContent
});

const CloseModalReducer = (state: State) => ({
  ...state,
  modalContent: undefined
});

export const reducerMap: any = {
  INIT: () => InitialState,
  [StartSearchAction]: StartSearchReducer,
  [CompleteSearchAction]: CompleteSearchReducer,
  [OpenModalAction]: OpenModalReducer,
  [CloseModalAction]: CloseModalReducer
};
