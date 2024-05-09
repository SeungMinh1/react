let arr1 = ['March', 'Jan']
let arr2 = ['Feb', 'Dec']
let arr3 = [...arr1, ...arr2]
let arr4 = [arr1, ...arr2]

console.log(arr3[1]);
console.log(arr3);
console.log(arr4);
console.log(arr4[0]);
console.log(arr4[0][1]);