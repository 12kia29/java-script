//const form = document.getElementById('my-form');// selector1 , by id
//const form = document.getElementsByClassName('container');//selector2 , by class
//const form = document.querySelector('#my-form');//selector3 , we can use id , class, just need in the () use # for id and . for class
//const form = document.querySelector('.container');//selector3 ,select by class
const ul =document.querySelector('.items');
//ul.firstElementChild.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.innerText='hello';// change text 
//ul.firstElementChild.innerHTML="<h2>hello</h2>";// change text by html element
ul.children[1].innerHTML="<h2>hello</h2>";//select by childeren and change text
console.log(ul)

