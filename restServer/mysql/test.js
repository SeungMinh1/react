const pool = require("./index");

//2.SQL실행
function selectAll(){
    const sql ="SELECT * FROM customer";
    pool.query(sql, function(err, results,fields){
        if(err){
            console.log(err);
        }
        console.log(results);
    })
}

function selectInfo(){
    const sql ="SELECT *FROM customer where id=?";
    const id=1;
    pool.query(sql, id, (err, results, fields)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
    })
}

function insert(){
    const sql = "insert into customer set ?";
    const customer = {name:'qq', email:'er', phone:'006', address:'qcfb'};
    pool.query(sql, customer, (err, results, fields)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
    })
}
insert();
selectAll();

function update(){
    const sql = "update customer set ? where id=?";
    const customer = {name:'ww', email:'ww', phone:'007', address:'cv'};
    const id = 5;
    pool.query(sql, [customer, id], (err, results, fields)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
    })
}

//update();

function deleteCustomer(){
    const sql = "DELETE from customer where id = ?";
    const id = 5;
    pool.query(sql, id, (err, results)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
    })
}
//deleteCustomer();