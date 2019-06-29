export const search = (url: string) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };

  xhttp.open(
    "GET",
    `https://software-listing-backend.herokuapp.com/${url}`,
    true
  );
  xhttp.send();
};
