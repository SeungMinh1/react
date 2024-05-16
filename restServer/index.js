
const express = require("express");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const morgan = require("morgan");
const cors = require("cors");
const app = express(); // createServer 서버만듬
const port = 8000; //30000


app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/todo", todoRoute);

app.get("/", (req, res) =>{
    res.send("hello world adfe");
});

app.listen(port, ()=>{
    console.log(`server running http://localhost:${port}`);
})