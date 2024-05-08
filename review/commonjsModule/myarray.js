let emps=[{name:'park', age:20, point:100 },
    {name:'choei', age:26, point:200 },
    {name:'kim', age:10, point:50 }
]

function totalPoint(){
   return emps.reduce((a,b)=> a + b.point, 0);
}

//common js 모듈 export
module.export =  totalPoint;