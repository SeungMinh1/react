//동기식 = 블로킹함수

const fs = require("fs");
let data = fs.readFileSync("text.txt", "utf8");
console.log(data);
console.log("the end")