
function customerList(){
    fetch("http://localhost:3000/customer")
        .then(result => result.json())
        .then(result => 
            {
               
                for(element of result){
                    const newtag = `<tr>
                    <td class="text-center">${element.id}</td>
                    <td class="text-center">${element.name}</td>
                    <td class="text-center">${element.email}</td>
                    <td class="text-center">${element.phone}</td>
                    <td class="text-center">
                        <button class="btnUpd">조회</button>
                        <button class="btnDel">삭제</button>
                    </td>
                    </tr>`;
                    
                    list.insertAdjacentHTML("beforeend", newtag);

                }
            })
}
customerList();

function insert(){
    const sql = "insert into customer set ?";
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const email =  document.getElementById('password').value
    console.log(id, name);
    fetch("http://localhost:3000/customer",{
        method : 'post',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({name:id, email:name, phone:email})
      })
      .then(result =>result.json())
      .then(result => {console.log(result)
        list.innerText = '';
        customerList();
      })
}


document.getElementById('btnInsert').addEventListener('click', function(){
    insert();
}
)