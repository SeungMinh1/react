const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

const sql={
    todoList : "select * from todo",
    todoinsert : "insert into todo set ?",
    todoDelete : "delete from todo where id=?",
    todoUpdate : "update todo set ? where id=?",
   
}


//전체조회
router.get("/", async (req, res)=>{
    let result = await mysql.query(sql.todoList);
    res.send(result);
})

//등록
router.post("/", async (req, res)=>{
    let todothing = req.body;
    let result = await mysql.query(sql.todoinsert, todothing);
    res.send(result);
})

//삭제
router.delete("/:no", async (req, res)=>{
    let no = req.params.no;
    let result = await mysql.query(sql.todoDelete, no);
    res.send(result);
})

//name, completed 수정
router.put("/:id", async (req, res)=>{
    const id = req.params.id;
    //const name = req.body.name;
    //const complete = req.params.complete;
    let result = await mysql.query(sql.todoUpdate, [req.body, id]);
    res.send(result);
})

//completed수정 
// router.put("/:id", async (req, res)=>{
//     const id = req.params.id;
//     //const newName = req.body.newName;
//     const completed = req.params.completed;
//     let result = await mysql.query(sql.todonameUpdate, [completed, id]);
//     res.send(result);
// })

module.exports = router;