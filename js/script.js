/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Below I have established and array of object that are stored in the variable 'quotes'
// I have included five properties within each object

var quotes = [
  {
    quote: "You can't use up creativity. The more you use, the more you have.",
    source: "Maya Angelou, ",
    citation: "Conversations with Maya Angelou",
    year: "1989",
    tags: "creativity"
  },
  {
    quote: "I have only two rules which I regard as principles of conduct. The first is: Have no rules. The second is: Be independent of the opinion of others.",
    source: "Albert Einstein",
    citation: "A close Look at the World's Greatest Thinker",
    year: "1930",
    tags: "life"
  },
  {
    quote: "Man is least himself when he talks in his own person. Give him a mask, and he will tell the truth.",
    source: "Oscar Wilde",
    citation: "The critic as Artist",
    year: "1891",
    tags: "truth"
  },
  {
    quote: "Always dream and shoot higher than you know you can do. Don't bother just to be better than your contemporaries or predecessors. Try to be better than yourself.",
    source: "William Faulkner",
    citation: "Paris Review Interview",
    year: "1958",
    tags: "inspirational"
  },
  { quote: "A man is but the product of his thoughts. What he thinks, he becomes.",
    source: "Mohandas K. Gandhi",
    citation: "Ethical Religion",
    year: "1922",
    tags: "ethics"
  },
  {
    quote: "It is so important that you work your butt off. Don’t ever look for shortcuts.",
    source: "Arnold Schwarzenegger",
    citation: "Don't Ever Look For Shortcuts", 
    year: "2016",
    tags: "self-development"
  }
];


// This function 'getRandomQuote' generates a random quote from the 'quotes' variable.
// I used Math.random and times the entire length of the 'quotes' variable to ensure its including all object even if some are added and removed later on. 
// Once Math.random is finished running it returns a random quote to the funciton.

function getRandomQuote() {  
 
  return quotes[Math.floor(Math.random() * quotes.length)];
  }




// This function 'printQuote' prints the randomized quote to the web page. 
// I've stored the random quote into the var 'randomQuote'
// The var 'generateQuote' is set to an empty string to hold quote properties
// I run an if clause to determine if there is a citation, year or tags property
// generateQuote is then printed to the web page


function printQuote() {
  var randomQuote = getRandomQuote();
  var generateQuote = "";
  generateQuote += '<p class="quote">' + randomQuote.quote + "</p>"
  generateQuote += '<p class="source">' + randomQuote.source 
    if (randomQuote.citation) {
    generateQuote += '<span class="citation">' + randomQuote.citation + "</span>"
    } if (randomQuote.year) {
        generateQuote += '<span class="year">' + randomQuote.year + "</span>"
    } if (randomQuote.tags) {
        generateQuote += '<span class="tag">' + randomQuote.tags + "</span> </p>"
    }
document.getElementById('quote-box').innerHTML= generateQuote
    randColor();
}




// This function changes the background color once the quote changes; its called in the 'printQuote' function

function randColor() {
  var rc1 = Math.floor(Math.random() * 140);
  var rc2 = Math.floor(Math.random() * 140);
  var rc3 = Math.floor(Math.random() * 140);
  var rbgColor = "rgb(" + rc1 + "," + rc2 + "," + rc3 + ")";

  document.body.style.backgroundColor = rbgColor;
  }
  
// a timer is set to the page to change the quote every 20 seconds
var timer = setInterval(printQuote, [20000]) 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
