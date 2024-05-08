//spread ...
let arr1 = ['March', 'Jan']; 
let arr2 = ['Feb', 'Dec']; 
let arr3 = [... arr1, ...arr2];
//console.log(arr3);

let arr11 = [1,2,3];
let arr12 = [4,5,6];
let arr13 = arr11; //얕은복사
let arr14 = arr11.map((a)=>a);
let arr15 = [...arr11];
console.log(arr14);
arr15[0] = 200;
console.log(arr11);
console.log(arr15);

let arr16 = [...arr11, ...arr12];
let arr17 = [arr11, ...arr12];
console.log(arr17[0][0]);