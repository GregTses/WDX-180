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

// Loop through the nodeList and get the text content of each paragraph
allParagraphs.forEach((paragraph) => console.log(paragraph.textContent));

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
allParagraphs[3].textContent = "Fourth Paragraph";
console.log(allParagraphs[3].textContent);

// Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// Select all paragraphs and loop through each element and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph
allParagraphs.forEach((paragraph, i) => {
  paragraph.style.fontSize = "24px";
  if (i % 2 === 0) {
    paragraph.style.color = "green";
  } else {
    paragraph.style.color = "red";
  }
  paragraph.id = `par${i}`;
  paragraph.classList.replace("something", "seagapo");
});
