"use strict";
const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const api_url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

// Fetch the API
const getQuote = async function () {
  try {
    const res = await fetch(api_url);
    if (!res.ok) throw new Error("Problem loading data.");
    const data = await res.json();
    renderQuote(data.message);
  } catch (err) {
    alert(err);
  }
};

// Event listener
btn.addEventListener("click", getQuote);

// Function to display quotes
function renderQuote(quotes) {
  quote.textContent = quotes;
}
