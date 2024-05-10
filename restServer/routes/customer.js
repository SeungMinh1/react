const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

const sql = {
    customerList : "select * from customer",
    customerInfo : "select * from customer where id=?",
    customerInsert : "insert into customer set ?",
    customerUpdate : "update customer set ? where id=?", 
    customerDelete : "delete from customer where id=?"
}

//전체조회
router.get("/", async (req, res)=>{
    let result = await mysql.query(sql.customerList); 
    res.send(result);
    });
//단건조회
router.get("/:id", async (req, res)=>{
    const id = req.params.id;
    let result = await mysql.query(sql.customerInfo, id); 
    res.send(result);
    });
//등록
router.post("/", async (req, res)=>{ 
    let customer = req.body;
    let result = await mysql.query(sql.customerInsert, customer);
    if(result.affectedRows == 1){
        res.send(true);
    }else{
        res.send(flase);
    }
    
});
//수정
router.put("/:id", async(req, res)=>{
    const id = req.params.id;
    const custom = req.body;
    let result = await mysql.query(sql.customerUpdate, [custom, id])
    res.send(result);
    });
//삭제
router.delete("/:id", async(req, res)=>{
    const id = req.params.id;
    let result = await mysql.query(sql.customerDelete, id);
     res.send(result);

});

module.exports = router;



/*
//전체조회 : path variable => GET, req.params
app.get("/customer", (req, res) => { 
    // 2. SQL 실행 
    sql = "SELECT * FROM customer"; 
    pool.query(sql, function (err, results, fields) { 
    if (err) {     
    console.log(err);    
    } 
    // 3. 결과 처리 
    console.log(results); 
    res.send(results);
    }); 
   
    //res.send({cmd:"고객정보조회", no});
  }); 
  */