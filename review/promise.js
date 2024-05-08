/*
function delay() { 
    return new Promise((resolve, reject) => { 
      setTimeout(() => {  resolve("hello");  }, 4000); 
    }); 
  } 
   
  delay().then((res) => { 
    console.log("then", res); 
  }); 
   
  console.log("then after"); 
  */
 function delay(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('timeout')
            resolve()
         }, 3000);
    }) //end of promise
    
 }//end of function

 //promise
// delay().then(()=>console.log("call"))
// .catch(() => console.log("error"))

async function execDelay(){
    await delay();
    console.log("call");
}

execDelay();