"use strict";
const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");

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
  quote.textContent = quotes;
}
