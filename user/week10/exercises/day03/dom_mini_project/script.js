"use strict";

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function updateDateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const currentDateTime = now.toLocaleString("en-US", options);
  document.querySelector("#datetime").textContent = currentDateTime;
  document.querySelector("#year").style.color = randomColor();
  document.querySelector("#datetime").style.backgroundColor = randomColor();
}
document.querySelector(".wrapper").style.textAlign = "center";
document.querySelector("html").style.fontFamily = "Sans-Serif";
// document.querySelector("body").style.cssText =
//   "display: flex; justify-content:center; ";
document.querySelector("h1").innerHTML =
  "Asabeneh Yetayeh challenges in <span id='year'>2020</span>";
document.querySelector("h1 span").style.fontSize = "80px";
document.querySelector("h2").style.cssText =
  "text-align: center;font-weight: 100; text-decoration: underline; margin: 0";
document.querySelector("#datetime").style.cssText =
  "display: inline-block; padding: 10px 20px;margin-bottom: 15px";
document.querySelector("ul").style.cssText =
  "list-style: none; text-align: left; max-width: 800px; margin:0 auto";
document
  .querySelectorAll("li")
  .forEach(
    (list) =>
      (list.style.cssText =
        "background: #eb695b; padding: 20px;border: 1px solid white")
  );
document.querySelector("li").style.background = "#5bbc7a";
document.querySelector("ul li:nth-child(2)").style.background = "#f7dc5c";

setInterval(updateDateTime, 1000);
