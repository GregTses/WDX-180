const answer = prompt(
  "Question: Who created JavaScript?\n\nA) Brendan Eich\nB) Bill Gates\nC) Mark Zuckerberg\n\nPlease select the correct option (A, B, or C)."
)
  .toLowerCase()
  .trim();

if (answer === "a") {
  alert(
    "Correct! Not only did he create JS, the prototype of the language was ready in 10 days!"
  );
} else if (answer === "b") {
  alert("Nope. He lead the development of the Windows Operating System.");
} else if (answer === "c") {
  alert("Nope. He just came up with the idea for a social network idea.");
} else alert("Invalid input.");
