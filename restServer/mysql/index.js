// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속 정보
const conn = {
  host: "192.168.0.14", //192.168.56.1
  port: "3306",
  user: "hr",
  password: "hr",
  database: "test",
  connectionLimit: 10,
};

// DB 커넥션 생성
let pool = mysql.createPool(conn);

query = (sql, values) =>{
    return new Promise((resolve, reject) =>{
        pool.query(sql, values, (err, results)=>{
            if(err){
                console.log(err)
                reject(err);
            };
            resolve(results);
        });
    });
}


module.exports = {pool, query};