const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

const sql = {
    reviewList : "select * from review",
    reviewInfo : "select * from review where liquorNo=?", //해당 술에대한 리뷰조회
    reviewinsert : "insert into review set ?",
    reviewUpdate : "update review set ? where reviewNo=?",
    reviewDelete : "delete from review where reviewNo=?",
}

//전체조회
router.get("/", async (req, res)=>{
    let result = await mysql.query(sql.reviewList);
    res.send(result);
})
//해당 술에대한 리뷰조회
router.get("/:id", async (req, res)=>{
    let id = req.params.id
    let result = await mysql.query(sql.reviewInfo, id);
    res.send(result);
})
//등록
router.post("/", async (req, res)=>{
    let body = req.body;
    let result = await mysql.query(sql.reviewinsert, body);
    res.send(result);
})
//수정
router.put("/:id", async (req, res)=>{
    let id = req.params.id
    let body = req.body;
    let result = await mysql.query(sql.reviewUpdate, [body, id]);
    res.send(result);
})
//삭제
router.delete("/:id", async (req, res)=>{
    let id = req.params.id
    let result = await mysql.query(sql.reviewDelete, id);
    res.send(result);
})

module.exports = router;