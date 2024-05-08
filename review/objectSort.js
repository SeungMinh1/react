

emps=[{name:'park', age:20 },
    {name:'choei', age:26 },
    {name:'kim', age:10 }
]
//age 정렬
emps.sort((a,b) => a.age - b.age);
console.log(emps);
//name 정렬
emps.sort((a,b) => a.name > b.age ? 1:a.name == b.age ? 0:-1); //sort는 숫자여야됨
console.log(emps);