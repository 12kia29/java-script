//test-alert
//alert("hello")
 
// test-console
console.log("hello");
//test-console-warning
console.warn('22warning');
//test-console-error
console.error('34error');
//test-dom--change inside by attribute id
document.getElementById("content").innerHTML = "message";
//test-dom--write to text by dom
document.write("counter subject");
//variable test
//test-var
var spider="spider man";
console.log(spider);
//test-let
let lion="lion king";
console.log(lion);
//test-const--use camelcase  
const elephantBlack="big noise";
console.log(elephantBlack);
//test-number,null,undefined
let score=40;
console.log(score);
score=50;
console.log(score);
let name=null;
console.log(name);
console.log(typeof name);//back to object(nice bug🤣1995)
const age=undefined ;
console.log(age);
console.log(typeof age);

// + - * / %
const sigma=10+score;
console.log(sigma);
const minus=score-5;
console.log(minus);
const point=score*5;
console.log(point);
const midScore=score/2;
console.log(midScore);
const remain=score%3;
console.log(remain);
//++ --
score--;
console.log(score);
score++;
console.log(score);
let newScore=score++;
console.log(newScore);
let newScore2=++score;
console.log(newScore2);
//let newScore3=+++score
//console.log(newScore3) //test+++
console.log(score);
let newScore4=score--;
console.log(newScore4);
console.log(score);
let newScore5=--score;
console.log(newScore5);
//string test ,+ ,+''+,...
let lName="lee";
name="james";
let fullName=name+lName;
console.log(fullName);
fullName=name+" "+lName;
console.log(fullName);
fullName="hello"+" "+name+" "+lName;
console.log(fullName);
fullName=name+" "+lName+" "+"is a good man";
console.log(fullName);
//backtack test (standard ES6)
fullName=`hello ${name}${lName}`;
console.log(fullName);
fullName=`hello ${name}+''+${lName}`;//+''+ in the backtest (It can't create a gap between the two words)
console.log(fullName);
//test other position of +''+in the backtick
fullName=`hello ${name}`+''+`${lName}`;//why doesn't it work? (It can't create a gap between the two words)
console.log(fullName);
//test other position of +``+in the backtick
fullName=`hello ${name}`+``+`${lName}`;//all the same (It can't create a gap between the two words) bec we can in the backtick use space to create a gap between the two words
console.log(fullName);
//finally test the space in the backtick
fullName=`hello ${name}                      ${lName}`;//work it
console.log(fullName);
// variable method test
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.substring(0,5));
console.log (fullName.split(" "));// nice method for search and make list to use from search engine
//mixing variable methods test
console.log(fullName.substring(0,5).toUpperCase());
console.log(fullName.substring(0,11).split(" "));
console.log(fullName.substring(0,11).split(" ")[1].toUpperCase());
console.log(fullName.substring(0,11).length*2%7);
//test array
//writing methodes
//fisrt way to write array
let classNames= new Array("lee","james","jack","tom");
console.log(classNames);
//second way to write array(better way)
let classNames2=["oliver","flanck","pother","aron"];
console.log(classNames2);
//accessing to the inside of array
console.log(classNames[1],classNames2[2]);
//mixed
let classNames3=[classNames[0]+" "+classNames2[1],classNames[1]+" "+classNames2[2]];
console.log(classNames3);   
//updating the inside of array
classNames[4]="jerry";
console.log(classNames);
// methods of array
//2 ways to add new element to the array
//first way
classNames[5]="holton";
console.log(classNames);
//second way
classNames2.push("kolren");
console.log(classNames2);
classNames3.push(classNames[5]+" "+classNames2[4]);
console.log(classNames3);
classNames.unshift("petter");//secend method array
console.log(classNames);
classNames3.unshift(classNames[0]+" "+classNames2[0]);
console.log(classNames3);
classNames3.pop();//Third method array
console.log(classNames3);
console.log(classNames3.indexOf("james pother"));//fourth method array
//use all datatipes in the array(nice dainamic typing in js)
let allDataTypes=[1,"hello",true,undefined,null,["lee","james"],{name:"lee",age:30}];
console.log(allDataTypes);
console.log(allDataTypes[5],allDataTypes[6],allDataTypes[4]);//accessing to the inside of array in the array
//object test
let student={
    name:"lee",
    lastName:"james",
    age:30,}
console.log(student);
//mixed array and object
let student2={
    name:"jone",
    lastName:"doe",
    age:25,
    address:{
        city:"new york",
        country:"usa"
    },
    number:[16,24,31,4.1,52]
};
console.log(student2.address.city,student2.number[3]);//dot notation to access to the inside of object and array
console.log(student2["address"]["country"],student2["number"][4]);//bracket notation to access to the inside of object and array
//updating the inside of object 
student2.address.city="los angeles";
console.log(student2.address.city);
student2.number[0]=18;
console.log(student2.number);
//adding new property to the object
student. address={
    city:"new york",
    country:"usa"
}
console.log(student);
//function test
//method of writing function
function sayhello(){
    console.log("hello");
}//first method of writing function
sayhello();
const saybye=()=>{console.log("bye");}//second method of writing function
saybye();
// test return in function
function math(x,y){
    return x*y;
}
console.log(math(6,9));// 1 more of states
function fullAddress(city,country){
    return `my city is ${city} and my country is ${country}`;
}
console.log(fullAddress("madrid", "spain"));// repet state by string
//function have 4 states
//array object (why testing array object? becuse, Practicality and json-like)

const cars=[
    {
        name:'doge',
        id:1,
        engine:'v8',
        canstart:true

    },
    { 
        name:'alfa',
        id:4,
        engine:'v6',
        canstart:false
    },
    {
        name:'bmw',
        id:2,
        engine:'v4',
        canstart:true 
    }
];
console.log (cars[0].engine); //access method array object
//change array object to json
const exlCar=JSON.stringify(cars);
console.log(exlCar);
//loop
//for

for(let i=0;i<10;i++){
    console.log(i);
}
//to display array elements(This method is good for displaying array elements, but (for of) better than it)
for(let i=0;i<cars.length;i++){
    console.log(cars[0].name);
}
//while(old loop)
let pen=1
while(pen<10){
    console.log('blue'+pen);
    pen++  //If I hadn't written this operation (pen++), it would have gotten stuck in an infinite loop.(crash browser)
}
// for ... of
for(let srt of cars){
    console.log(srt.name , srt.engine);
}
//high order array methods
//forEach


/*cars2.forEach(function(c) {   // this cant work becuse cars2 not array , forEach working on array 
    console.log(c)
});*/

cars.forEach(function(c){
     console.log(c)
});
// map
const newCars=cars.map(function(cc){
    return{name:cc.name,engine:cc.engine}
});
console.log(newCars)
//filter
const newCars1=cars.filter(function(cc){
    return cc.canstart===true
});
console.log(newCars1);
// high order array methods mixed
const newCars4=cars.forEach(function(c){})+cars.map(function(c){
    return{name:c.name,engine:c.engine}
})+cars.filter(function(c){return c.canstart===true});
console.log(newCars4); // (tested this but , answer this cod = undefined[object Object],[object Object],[object Object][object Object],[object Object] ) forEach not good idea for this
const newCars5=cars.filter(function(c){return c.canstart===true}).map(function(c){return{engine:c.engine}});
console.log(newCars5);// i can search in array by this methods but this time , I didn't use it because `forEach`  doesn't return an array.


/*const newCars6=cars.filter(function(c){return c.canstart===true}).map(function(c){return{engine:c.engine}}).forEach(function(search){search.name='benze'}); // cant work again becuse bad use forEach
console.log(newCars6);'*/
const newCars6=cars.filter(function(c){return c.canstart===true}).map(function(c){return{engine:c.engine}}).forEach(function(show){console.log(show);}); // this code can work and its return what iwant but this newCars6 return undefined    sooooooo
cars.filter(function(c){return c.canstart===true}).map(function(c){return{engine:c.engine}}).forEach(function(show){console.log(show);});//if i need a make array use a map and filter but if u need return a data this can work
//condition
//if(),if/else,else if()
let x=11;
if(x<10){
    console.log('x is less than 10');
}
else if(x>10){
    console.log('x is greater than 10');
}
else{
    console.log('x is equal to 10');
}
// my test   u know, all Mechanic => engine = my love   :))
let engine=2200+"hp";
if(engine<2000+"hp"){
    console.log("lower engine");
}
else if(engine>2000+"hp"){
    console.log("higher engine => test for god :)");
}
else{
    console.log("equal engine");
}
// but this test is not good becuse i use string and number in the same time (i will fix it in the future)
let engine1=1500;
if(engine1<2000){
    console.log(`lower engine  ${engine1}hp`);
}
else if(engine1>2000){
    console.log(`higher engine  ${engine1}hp => test for god :)`);
}
else{
    console.log(`equal engine  ${engine1}hp`);
}
//ternary operator
let x1=10;
let color1=x1>10 ? 'red' : 'blue';
console.log(color1);
//switch
let color='blue';
switch(color){
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console. log('color is not red or blue');        
}
// my love test
let piston= 'alminum';
switch(piston){
    case 'alminum':
        console.log('piston is alminum')
        break;
    case 'steel':
        console.log('piston is steel')
        break;
    default:
        console. log('piston is not alminum or steel');        
}
//arrow function test i testing it last exercise  but this time better than last time becuse i use it in the high order array methods
// test easy arrow function
const addNum=(num1=2,num2=9)=>console.log(num1+num2);
addNum(22,81);
addNum(22);

