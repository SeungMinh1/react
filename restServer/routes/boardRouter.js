//id title body date writer

const express = require("express");
const router = express.Router();
const mysql = require("../mysql");
const { route } = require("./customer");

const sql = {
    boardList : "select * from board",
    boardInfo : "select * from board where id=?",
    boardInsert : "insert into board set ?",
    boardUpdate : "update board set ? where id=?", 
    boardDelete : "delete from board where id=?"
}

router.get("/", async(req, res)=>{
    let result = await mysql.query(sql.boardList);
    res.send(result);
})
router.get("/:id", async (req, res)=>{
    const id=req.params.id;
    let result = await mysql.query(sql.boardInfo, id);
    res.send(result);
})

router.post("/", async(req, res)=>{
    let boardd = req.body;
    let result = await mysql.query(sql.boardInsert, boardd);
    res.send(result);

})

router.put("/:id", async(req, res)=>{
    const id = req.params.id;
    let result = await mysql.query(sql.boardUpdate, [req.body, id]);
    res.send(result);
})

router.delete("/:id", async(req, res)=>{
    const id = req.params.id;
    let result = await mysql.query(sql.boardDelete, id);
    res.send(result);
})

module.exports = router;