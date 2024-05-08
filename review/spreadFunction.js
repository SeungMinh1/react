
function hap(first, ...rest){
   return rest.reduce((a,b) => a+b, first);
}

function hap2(first, ...rest){
    for(let i=0; i<rest.length; i++){
        first += rest[i];
    }
    return first;
    /*
    for(value of rest){
        first+= rest;
    }
    */
 }
console.log(hap(10, 20,30,40));
console.log(hap2(10, 20,30,40,50));

emps=[{name:'park', age:20, point:100 },
    {name:'choei', age:26, point:200 },
    {name:'kim', age:10, point:150 }
]

let [emp1, emp2, emp3] = emps;
console.log(emp1.name); //첫번째 사원이름

let{name, age} = emp1;
console.log(age);

const {empname} = {empname:'park', age:20, point:100 };
console.log(empname)

const [a,...b] = [1,2,3];
console.log(b);

