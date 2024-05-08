// 비동기식 = non-blocking 함수 => 롤백함수이용

const fs = require("fs");
fs.readFile("text.txt", "utf8", (err, data)=> console.log(data));
console.log("the end");