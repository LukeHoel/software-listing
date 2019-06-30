import { store } from "../Store/Store";
import { CompleteSearchAction, StartSearchAction } from "../Store/Actions";

export const search = (url: string) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      store.dispatch({
        type: CompleteSearchAction,
        searchResults: JSON.parse(this.responseText).results.other
      });
    }
  };

  xhttp.open(
    "GET",
    `https://software-listing-backend.herokuapp.com/${url}`,
    true
  );
  store.dispatch({ type: StartSearchAction });
  xhttp.send();
};
