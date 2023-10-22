console.log(name);
console.log("hello");
var name='bhupendra';
console.log(name);
console.log(a);
console.log('helloji');
console.log(5+6-'4');
var a='550';
var b=[12,14,15,45];
var c=b;
console.log(b);
console.log(c);
c.pop();
console.log(c);
console.log(b);
if(-1)
{
    console.log("it will be true");
}
else if("apple")
{
    console.log("it will be true");
}
else
{
    console.log("all run when if and else-if not execute");
}
var n=5;
for(var i=1;i<11;i++)
{
    console.log(n*i);
}
var i=0
while(i<11)
{
    console.log(n*i);
    i++
}
// functions:
function hello(p){
    console.log(p);
    console.log("Hello");
}
var g="Bhupendra";
hello(g);
// Array:
var k=[10,25,13,65,75];
// console.log(k[2]);
console.log(k);
k.push(100);//add to end
console.log(k);
k.pop();//delete at end
console.log(k);
k.shift();
console.log(k);
k.unshift(300);
console.log(k);
k.splice(3,1);//from which index have delete,no. of element to delete
console.log(k);

// OBJECT:
var computer={  name:"Lenova Ideapad",
                color:"white",
                price:40000,
                detail: function (){
                    console.log("name  : "+computer.name);
                    console.log("color : "+computer.color);
                    console.log("price : "+computer.price);
                 }
}
console.log("Computer Details are :");
computer.detail();
function ab(){
    for(let i=0;i<11;i++)
    {
        console.log(i); //it prints 0-10
    }
    console.log(i); //it will undefined or error something
}
ab();
// newe();
function outerFunction() {
    // This is the outer function
    let outerVar = "I am from the outer function";
  
    function innerFunction() {
      // This is the inner function
      let innerVar = "I am from the inner function";
      console.log(outerVar); // Access outerVar from the outer function
      console.log(innerVar); // Access innerVar from the inner function
    }
  
    return innerFunction; // Return the inner function
  }
//   window objects are three types 
// 1. window
// 2. stack
// 3. heap

// Execution context: mainly a conatainer made of three elements 1. variables 2. functions inside functions 3. Lexical enviroment of that function.
//Copying array and  object completly : using Spread operator.
var n=[30,5,3,6,2,46,4,6];
var m=n;//not copying referened only to m of n
var d=[...n]
d.pop();
console.log(n);
console.log(d);
var obje={
    name:"bhuvie",
    class:"mca"
}
var obj1={...obje};
delete obj1.name;
obj1.class="BCA";
console.log(obje);
console.log(obj1);

if(NaN)
{
    console.log("NaN is in if means false execute This is if(true_0)");
}
else if(null)
{
    console.log("null is in else-if means false execute This is else-if(true_1)");

}
else if(0)
{
    console.log("0 is in else-if means false execute This is else-if(true_2)");

}
else if(false)
{
    console.log("false is in else-if means false execute This is else-if(true_3)");
//This is because the condition is explicitly false, and the code inside that block is considered unreachable code by the JavaScript interpreter.
}
else if(undefined)
{
    console.log("undefined is in else-if means false execute This is else-if(true_4)");

}
else if(document.all)
{
    console.log("document.all is in else-if means false execute This is else-if(true_5)");

}
else{
    console.log("NaN is in if means false execute This is else(false)");

}
var n1=[30,5,3,6,2,46,4,6];
n1.forEach(function(num){
    console.log(num);
})


var object1={
    name:"bhuvie",
    class:"mca",
    school:"iise"
}
for(var val in object1){
    console.log(val)
    console.log(object1[val])
}
for(var val in object1){
    console.log(val +" "+object1[val])
    console.log(val,object1[val])
};
setTimeout(function(){
    console.log("It is running after 3 second ");
    //3 sec=3000 milisecond
},3000);

function firstClassFuntion(a){
    a();
}
firstClassFuntion(function(){console.log("This is first class function")});//this is firstclassfunction

// function hello(bbb){ //this is high order fncs
//    bbb();
// }
// hello(function(){console.log("hello bhupendra")});
//constructor funcs:used, when you need elements with same properties
function box(){
    this.width=12;
    this.height=15;
    this.color="black";
    this.taste="sweet";
}
var b1=new box();
console.log(b1);
// document.getElementByClass("container").style.backgroundColor="green";
setTimeout(() => {
    console.log("djabcklj")
}, 1000);
var pk=(function(){
 var pr="pyar";
//  console.log(pr);
return{
    getter:function(){
        console.log(pr);
    },
    setter:function(val){
        pr=val;
    }
}

})()
pk.getter();
pk.setter("hasfj");
pk.getter();

////  DOM ?????????????

