const quoteContainer = document.querySelector(".quote-container");
const quote = document.getElementById("quote");
const author = document.getElementById("quoteAuthor");
const btn = document.getElementById("quoteBtn");
const shareBtn = document.querySelector(".twitter");
const loader = document.querySelector(".loader");

function showLoaderSpinner() {
  loader.hide = false;
  quoteContainer.hide = true;
}

function hideLoaderSpinner() {
  loader.hide = true;
  quoteContainer.hide = false;
}

async function getQuote() {
  // using proxy to bypass the CORS
  const proxy = "https://cors-anywhere.herokuapp.com/";

  const api_Url =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const request = await fetch(proxy + api_Url);
    const response = await request.json();

    // Showing Loader before showing the quote
    showLoaderSpinner();

    quote.innerHTML = response.quoteText;
    author.innerHTML = response.quoteAuthor ? response.quoteAuthor : "Unknown";

    hideLoaderSpinner();
  } catch (error) {
    getQuote();
  }
}
getQuote();

btn.addEventListener("click", getQuote);

// Twitter Share Button
shareBtn.addEventListener("click", () => {
  window.location.href = `https://twitter.com/intent/tweet?text=${quote.innerText}`;
});
