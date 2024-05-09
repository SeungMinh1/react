// URL - pathname, searchParms 

const http = require("http");
const path = require("path");
const hostname = '127.0.0.1'; 
const port = 3000; 

const url = require("url");


const server = http.createServer((req, res) =>{
    const myURL = new URL("http://127.0.0.1" + req.url);
    const pathname = myURL.pathname;
    // const url2 = url.parse(req.url, true);
    // const pathname2 = (url2.pathname);
    // console.log("pathname", pathname2);
    if(pathname == "/json"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json'); 
        res.end( 
            JSON.stringify({ 
              data: "Hello World!!", 
            }) 
          ); 

    }else if(pathname == "/html"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html'); 
        let template = `<!DOCTYPE html><html lang='ko'> <head><meta charset="UTF-8"></head>     
        <body><h1 style='color:blue'>node 서버</h1></body></html>`; 
        res.end(template); 

    }else if(pathname =="/text"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain'); 
        res.end('Hello Woadfsdf~adfasdf~!'); 
    }else{
        res.statusCode = 404;
        res.end();
    }
    /*
    console.log("pathname", myURL.pathname); 
    console.log("search", myURL.searchParams); 
    console.log("age", myURL.searchParams.get("username")); 
    console.log("url", req.url); 
    res.statusCode = 200;  
    res.setHeader('Content-Type', 'text/plain');  
    res.end('Hello World'); 
    */
});

// 3. 지정된 포트 및 호스트이름으로 수신 대기 
server.listen(port, hostname, () => {                   
    console.log(`Server running at http://${hostname}:${port}/`); 
  }); 