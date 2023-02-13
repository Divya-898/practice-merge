
let fetchbtn = document.getElementById("fetchBtn");
fetchbtn.addEventListener("click",buttonClickHandler)

function buttonClickHandler(){
    console.log("you have clicked fetchbtn")
   //instantiate an xhr object
   const xhr = new XMLHttpRequest();

   //open the object
   //xhr.open('GET','divya.txt',true);
   //get dummy json
    //xhr.open('GET' ,'https://jsonplaceholder.typicode.com/posts/1','true);
// used this for post request
  xhr.open('POST','http://dummy.restapiexample.com/api/v1/create' , true);
  //response header
  xhr.getResponseHeader('content-type','application/json')
   //what to do on progress optional
   xhr.onprogress = function(){
    console.log("on progress");
   }
//what to do when response is ready
   xhr.onload = function(){
    if (this.status === 200){
    console.log(this.responseText);
    }
    else{
        console.log("Some error occured");
    }
   }
   //send the get  request by default send the get request
  // xhr.send();
  //send the post data
  
  params = `{"name":"test@133","salary":"123","age":"23"}`;
  xhr.send(params);
   //asyn true that's why that code run first because not blocking method
   console.log('we are done');
   //old ready state function
   //xhr.onreadystatechange = function(){
   // console.log("ready state",xhr.readyState);
   }
//second button
let backupBtn = document.getElementById("backupBtn");
backupBtn.addEventListener("click",backHandler);

function backHandler(){

    console.log("you have clicked backbtn")
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();
 //open the ob
 xhr.open('GET','https://jsonplaceholder.typicode.com/posts' , true);  
 xhr.onload = function(){
    if (this.status === 200){
       //response to json formate
    let obj =JSON.parse(this.responseText);
    console.log(obj);
    let list = document.getElementById('list');
    str = " ";
    for(key in obj){
         str += `<li> ${obj[key].title}</li>`;
    }
     list.innerHTML = str;
    }
    else{
        console.log("Some error occured");
    }
   } 
   xhr.send();
   console.log("we are done fetching employee");
}
