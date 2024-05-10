const mysql = require("./index");

const selectAll = async ()=>{
    const sql = "select * from customer";
    const result = await mysql.query(sql); //mysql.query(sql).than(resolve => console.log(result))가능
    console.log(result);
}

const selectInfo = async ()=>{
    const sql = "select * from customer where id=?";
    const id = 1;
    const result = await mysql.query(sql, id);
    console.log(result);
}

const insert = async ()=>{
    const sql = "insert into customer set ?";
    const customer = {name:'zz', email:'ezz', phone:'006', address:'qcfb'};
    const result = await mysql.query(sql, customer);
    console.log(result);
}
//insert();
selectInfo();

