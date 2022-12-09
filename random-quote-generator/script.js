"use strict";
// const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn");

// const api_url = "https://forkify-api.herokuapp.com/api/v2/recipes/";

const getQuote = async function () {
  try {
    const res = await fetch(
      "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    );
    const data = await res.json();
    renderQuote(data.message);
  } catch (err) {
    alert(err);
  }
};

btn.addEventListener("click", getQuote);

function renderQuote(quotes) {
  const quote = document.querySelector(".quote");
  quote.textContent = quotes;
}
