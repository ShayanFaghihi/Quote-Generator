const quote = document.getElementById("quote");
const author = document.getElementById("quoteAuthor");
const btn = document.getElementById("quoteBtn");

async function getQuote() {
  const proxy = "https://cors-anywhere.herokuapp.com/";

  const api_Url =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const request = await fetch(api_Url);
    const response = await request.json();

    quote.innerHTML = response.quoteText;
    author.innerHTML = response.quoteAuthor;
  } catch (error) {
    getQuote();
    console.log("Whoops, no quote to show", error);
  }
}
getQuote();

btn.addEventListener("click", getQuote);
