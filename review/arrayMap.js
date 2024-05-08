
let arr = [1, 4, 9];
let arr2 = arr.map((x) => x*2);
console.log(arr2);

emps=[{name:'park', age:20 },
    {name:'choei', age:26 },
    {name:'kim', age:10 }
]
let emps2 = emps.map(a => {
    if(a.age>=20)
        a.auth = true;
    else
        a.auth = false;
    return a;
});
console.log(emps2);

//reduce(누산기, 현재값=> 누산기(연산)현재값, 초기값) 누적계산 
let init = 10;
let suminit = arr.reduce((a,b) => a*b, init);
console.log(suminit);

let init2 = 10;
let suminit2 = arr.reduce(
   function(accumulator, currentValue){return accumulator + currentValue}, init2);
console.log(suminit2);

emps=[{name:'park', age:20, point:100 },
    {name:'choei', age:26, point:200 },
    {name:'kim', age:10, point:150 }
]
let basePoint = 1000;
const totalPoint = emps.reduce(
    function(acc,cur){return(acc + cur.point)}, basePoint);
console.log(totalPoint); 

//filter
let words = ['adfef', 'adfeewa', 'sd', 'e'];
let result = words.filter((word) => word.length > 4);
console.log(result);

let result2 = emps.filter((em) => em.age >= 20);
console.log(result2);

