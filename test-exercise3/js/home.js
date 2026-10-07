//const form = document.getElementById('my-form');// selector1 , by id
//const form = document.getElementsByClassName('container');//selector2 , by class
//const form = document.querySelector('#my-form');//selector3 , we can use id , class, just need in the () use # for id and . for class
//const form = document.querySelector('.container');//selector3 ,select by class
//const ul =document.querySelector('.items');
//ul.firstElementChild.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.innerText='hello';// change text 
//ul.firstElementChild.innerHTML="<h2>hello</h2>";// change text by html element
//ul.children[1].innerHTML="<h2>hello</h2>";//select by childeren and change text

//console.log(ul)
// const btn = document.querySelector (".btn");
// btn.style.background = "red";
// test , style change
//const btn = document.querySelector (".btn");
// btn.addEventListener("click" , (e)=>{
//     e.preventDefault();//for dont refresh the page when click(submit button defult action is refresh the page)
//     console.log("clicked")
//     console.log(e.target.className);
//     //e.target.className="error";// change class name to error when click
//     //document.querySelector("#my-form").style.background = "#ccc"// change background color when click
//     //document.querySelector("body").classList.add("bg-dark");// change background color when click
//     document.querySelector(".items").lastElementChild.innerHTML="<h2>hello</h2>";// change text by html element
// });
//console.log(btn)
// const btn = document.querySelector (".btn");
// btn.addEventListener("mouseout" , (e)=>{
//     console.log("mouse out")// mouse out event
// });
const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const users = document.querySelector("#users");
myform.addEventListener("submit", onSubmit);// add form and all object in the form
function onSubmit(e) {
    e.preventDefault();
   console.log(nameInput.value);
   if(nameInput.value === '' || emailInput.value === '') {
      msg.classList.add("error");
      msg.innerHTML = "<h5>Please enter all fields</h5>";

      setTimeout(()=>{
        msg.innerHTML='';
        msg.classList.remove("error");

      } ,3000)
   }
   else {
    const li=document.createElement("li");
    li.appendChild(document.createTextNode(nameInput.value + " : " + emailInput.value));
    users.appendChild(li); //li child a usears
    nameInput.value="";
    emailInput.value="";
   };
}
