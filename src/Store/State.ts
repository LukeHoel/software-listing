export interface State {
  menuOpen: boolean;
  loading: boolean;
  searchResults: any[];
}

export const InitialState: State = {
  menuOpen: true,
  loading: false,
  searchResults: []
};
