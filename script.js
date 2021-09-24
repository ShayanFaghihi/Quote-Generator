const quoteContainer = document.querySelector('.quote-container')
const quote = document.getElementById("quote");
const author = document.getElementById("quoteAuthor");
const btn = document.getElementById("quoteBtn");
const shareBtn = document.querySelector('.twitter');
const loader = document.querySelector('.loader');

async function getQuote() {
  // using proxy to bypass the CORS
  const proxy = "https://cors-anywhere.herokuapp.com/";

  const api_Url =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const request = await fetch(api_Url);
    const response = await request.json();

    // Showing Loader before showing the quote
    if(response.quoteText.length > 0) {
      loader.classList.add('hidden');
      quoteContainer.classList.remove('hidden');
      quote.innerHTML = response.quoteText;
      author.innerHTML = response.quoteAuthor ? response.quoteAuthor : 'Unknown';
    } else {
      loader.classList.remove('hidden');
      quoteContainer.classList.add('hidden');
    }
  } catch (error) {
    getQuote();
  }
}
getQuote();

btn.addEventListener("click", getQuote);

// Twitter Share Button
shareBtn.addEventListener('click', () => {
  window.location.href = `https://twitter.com/intent/tweet?text=${quote.innerText}`;
})