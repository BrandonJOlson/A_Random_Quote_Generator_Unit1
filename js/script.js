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
function getRandomQuote(array) {  
  return array[Math.floor(Math.random() * array.length)];
  }

console.log(getRandomQuote(quotes));

// I can get random quotes printed to the console.

/***
 * `printQuote` function
***/
function printQuote(quotes) {
  var randomQuote = getRandomQuote(array);
  var task = '';
}
console.log(printQuote());




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
