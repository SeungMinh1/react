const express = require("express");
const router = express.Router();

//전체조회
router.get("/", function(req, res){ res.send("product root");});
//등록
router.post("/insert", function(req, res){ res.send("insert root");});
//수정
router.put("/update", function(req, res){ res.send("update root");});
//삭제
router.delete("/delete", function(req, res){ res.send("delete root");});

module.exports = router;
