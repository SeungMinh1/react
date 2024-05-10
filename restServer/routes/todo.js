const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

const sql={
    todoList : "select * from todo",
    todoinsert : "insert into todo set ?",
    todoDelete : "delete from todo where no=?",
    todoUpdate : "update todo set complete=? where no=?"
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

//수정
router.put("/:no/:complete", async (req, res)=>{
    const no = req.params.no;
    const complete = req.params.complete;
    let result = await mysql.query(sql.todoUpdate, [complete, no]);
    res.send(result);
})


module.exports = router;