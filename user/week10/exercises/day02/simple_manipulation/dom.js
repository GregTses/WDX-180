/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 *
 * Complete the challenges found below:
 *
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE
let firstParagraph = document.querySelector("p");

let paragraphsArray = [];
for (i = 1; i <= 4; i++) {
  paragraphsArray.push(document.querySelector(`#paragraph${i}`));
}
let allParagraphs = document.querySelectorAll("p");

// Setting id
firstParagraph.id = "first";
// Setting class attributes
allParagraphs.forEach((paragraph) => paragraph.classList.add("something"));

console.log(firstParagraph, paragraphsArray, allParagraphs);
