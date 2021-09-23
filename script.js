async function getQuote() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api_Url =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const request = await fetch(proxy + api_Url);
    const response = await request.json();

    console.log(response);
  } catch (error) {
    console.log("Whoops, no quote to show", error);
  }
}
getQuote();
