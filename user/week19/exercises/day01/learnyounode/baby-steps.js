const arr = process.argv.slice(2);
const sum = arr.reduce((acc, num) => acc + parseInt(num), 0);
console.log(sum);
