//웹서버 

//1.http 모듈포함 
const http = require("http");
const mov = require("./movie")

//2.http 서버 생성
const server = http.createServer((req, res) => {

    //res.write("hello");
    res.writeHead(200, {"Content-Type":"application/json"});
    (async ()=>{
        let movieNm = await mov();
        let movie = {movieNm:movieNm, movieCd:1};
        res.end(JSON.stringify(movie));
    })();
    
    
});
//3.지정된 포트 및 호스트이름으로 수신대기
//4.서버가 준비되면 콜백함수 호출
server.listen(3000, "127.0.0.1", ()=>{
    console.log("server running http://127.0.0.1:3000");
});