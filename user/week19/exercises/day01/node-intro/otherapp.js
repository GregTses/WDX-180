const os = require("node:os");
const { convert } = require("unit-converter");

console.log(os.freemem());
const ram = `Total Memory: ${convert(os.totalmem()).to(
  "GB"
)}\n Free Memory: ${convert(os.freemem()).to("GB")}`;
console.log(ram);
