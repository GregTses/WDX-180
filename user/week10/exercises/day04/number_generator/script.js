// INSERT YOUR CODE HERE
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

document.body.style.cssText =
  "font-family: sans-serif;max-width: 700px;margin: 0 auto;";
const wrapper = document.querySelector(".wrapper");
wrapper.style.cssText =
  "margin-top: 30px;display: flex;flex-wrap: wrap;gap: 2px;";

let container;
let color;
for (let i = 0; i <= 101; i++) {
  container = document.createElement("div");
  container.style.width = "100px";
  container.style.padding = "20px 0px";
  container.style.alignSelf = "center";
  container.style.textAlign = "center";
  if (isPrime(i)) {
    color = "#fd5e53";
  } else {
    if (i % 2 === 0) {
      color = "#21bf73";
    } else {
      color = "#fddb3a";
    }
  }
  container.style.background = color;
  container.textContent = i;
  wrapper.appendChild(container);
}
