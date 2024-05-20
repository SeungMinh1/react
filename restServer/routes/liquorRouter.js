const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

const sql = {
    liquorList : "select * from liquor",
    liquorInfo : "select * from liquor where no=?",
    liquorinsert : "insert into liquor set ?",
    liquorUpdate : "update liquor set ? where no=?",
    liquorDelete : "delete from liquor where no=?",
}

//전체조회
router.get("/", async (req, res)=>{
    let result = await mysql.query(sql.liquorList);
    res.send(result);
})
//개별조회
router.get("/:id", async (req, res)=>{
    let id = req.params.id
    let result = await mysql.query(sql.liquorInfo, id);
    res.send(result);
})
//등록
router.post("/", async (req, res)=>{
    let body = req.body;
    let result = await mysql.query(sql.liquorinsert, body);
    res.send(result);
})
//수정
router.put("/:id", async (req, res)=>{
    let id = req.params.id
    let body = req.body;
    let result = await mysql.query(sql.liquorUpdate, [body, id]);
    res.send(result);
})
//삭제
router.delete("/:id", async (req, res)=>{
    let id = req.params.id
    let result = await mysql.query(sql.liquorDelete, id);
    res.send(result);
})

module.exports = router;