export interface State {
  loading: boolean;
  searchResults: any[];
  modalContent: any;
}

export const InitialState: State = {
  loading: false,
  searchResults: [],
  modalContent: undefined
};
