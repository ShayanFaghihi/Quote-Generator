const quoteContainer = document.querySelector(".quote-container");
const quote = document.getElementById("quote");
const author = document.getElementById("quoteAuthor");
const btn = document.getElementById("quoteBtn");
const shareBtn = document.querySelector(".twitter");
const loader = document.querySelector(".loader");

function showLoaderSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoaderSpinner() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

async function getQuote() {
  showLoaderSpinner();
  // using proxy to bypass the CORS
  const proxy = "https://secret-ocean-38471.herokuapp.com/";

  const api_Url =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const request = await fetch(proxy + api_Url);
    const response = await request.json();
    quote.innerHTML = response.quoteText;
    author.innerHTML = response.quoteAuthor ? response.quoteAuthor : "Unknown";
    
  } catch (error) {
    getQuote();
  }
  hideLoaderSpinner();
}
getQuote();

btn.addEventListener("click", getQuote);

// Twitter Share Button
shareBtn.addEventListener("click", () => {
  window.location.href = `https://twitter.com/intent/tweet?text=${quote.innerText}`;
});
