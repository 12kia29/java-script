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