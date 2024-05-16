const axios = require("axios");

const url = 'https://jsonplaceholder.typicode.com/todos'

function todoget(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
    res=>console.log(res.data)
    )
}

function todopost(){
   const param =  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
   axios.post(url, param).then(res => console.log(res.data));
    
}

function todoPut(){
    const param = {title: "react study!"};
    axios.put(url + "/1", param).then(res => console.log(res.data));
}

function todoDelet(){
    axios.delete(url + "/1").then(console.log(res => res.data))
}

todoDelet();