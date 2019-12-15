/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "one",
    source: "one"
  },
  {
    quote: "two",
    source: "two"
  },
  {
    quote: "three",
    source: "three"
  },
  {
    quote: "four",
    source: "four"
  },
  {
    quote: "five",
    source: "five",
    citation: "five", 
    year: "five"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {  
 
  return quotes[Math.floor(Math.random() * quotes.length)];
  }




/***
 * `printQuote` function
***/
function printQuote() {
  var randomQuote = getRandomQuote();
  var generateQuote = "";
  generateQuote += '<p class="quote">' + randomQuote.quote + "</p>"
  generateQuote += '<p class="source">' + randomQuote.source 
    if (randomQuote.citation) {
    generateQuote += '<span class="citation">' + randomQuote.citation + "</span>"
    } if (randomQuote.year) {
        generateQuote += '<span class="year">' + randomQuote.year + "</span> + </p>"
    }
    generateQuote += document.getElementById('quote-box').innerHTML= (generateQuote)
 console.log(randomQuote);
}






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
