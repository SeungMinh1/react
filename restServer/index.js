
const express = require("express");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const boardRoute = require("./routes/boardRouter");
const liquorRoute = require("./routes/liquorRouter");
const reviewRoute = require("./routes/reviewRouter");
const morgan = require("morgan");
const cors = require("cors");
const app = express(); // createServer 서버만듬
const port = 8000; //3000


app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/todo", todoRoute);
app.use("/board", boardRoute);
app.use("/liquor", liquorRoute);
app.use("/review", reviewRoute);

app.get("/", (req, res) =>{
    res.send("hello world adfe");
});

app.listen(port, ()=>{
    console.log(`server running http://192.168.0.14:${port}`);
})