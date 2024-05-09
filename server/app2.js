const http = require("http");
const hostname = '127.0.0.1'; 
const port = 3000; 
const url = require("url");

let emps=[{no:100, name:'park', age:20 },
{no:101, name:'choei', age:26 },
{no:102, name:'kim', age:10}
]

const server = http.createServer((req, res) =>{
    const _url = url.parse(req.url, true);
    const pathname = _url.pathname;
    res.writeHead(200, {'Content-Type': 'application/json'})
    if(pathname == '/emp'){
        res.end(JSON.stringify(emps)); 

    }else if(pathname =='/empInfo'){ // empInfo?no=100;
        const no = _url.query.no;
        let result = emps.filter((emp) => emp.no == no);
        res.end(JSON.stringify(result)); 

    }else if(pathname =='/empDelete'){ // empDelete?no=100;
        const no = _url.query.no;
        for(let i=0; i<emps.length; i++){
            if(no == emps[i].no){
                emps.splice(i,1);
            }
        }
        res.end(JSON.stringify(emps)); 

    }else if(pathname =='/empInsert'){ // empInsert?no=104&name=hong&age=30;
        let no1 = _url.query.no; 
        let name1 = _url.query.name; 
        let age1 = _url.query.age; 
        emps.push({no:no1, name:name1, age:age1});
        res.end(JSON.stringify(emps)); 

    }else{
        res.statusCode = 404;
        res.end();
    }


});

// 3. 지정된 포트 및 호스트이름으로 수신 대기 
server.listen(port, hostname, () => {                   
    console.log(`Server running at http://${hostname}:${port}/`); 
  }); 