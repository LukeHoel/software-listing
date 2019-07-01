import { store } from "../Store/Store";
import { CompleteSearchAction, StartSearchAction } from "../Store/Actions";

const distUrl = "https://software-listing-backend.herokuapp.com";
const devUrl = "http://localhost:8080";

export const baseUrl =
  process.env.NODE_ENV === "development" ? devUrl : distUrl;

export const search = (url: string) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      store.dispatch({
        type: CompleteSearchAction,
        searchResults: JSON.parse(this.responseText)
      });
    }
  };

  xhttp.open("GET", `${baseUrl}/${url}`, true);
  store.dispatch({ type: StartSearchAction });
  xhttp.send();
};
