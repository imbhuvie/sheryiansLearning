// Selecting HTMl element 
var n=document.querySelector("h1") //we cam=n store that value in a variable 
// //changing HTML
// document.querySelector("h1").innerHTML="BHUPENDRA VERMA"; //directly we are changing HTML
// n.innerHTML="BHUPENDRA VERMA"; //using variable 'n' we are changing HTML
// document.querySelector(".h2-heading").innerHTML="BHUPENDRA VERMA";
//changing CSS
// n.style.backgroundColor="black";
// n.style.color="white";

//EVENT LISTNER
n.addEventListener("click",function(){
    document.querySelector("h2").style.color="green"
    n.style.backgroundColor="red"
})
var flag=1;
var btn=document.querySelector("#btn")
var cont=document.querySelector(".container")
var bulb=document.querySelector(".bulb")

// document.querySelector("#btn").innerHTML="off";
let a=1;
let b=++a;
console.log(a,b);

btn.addEventListener("mouseover", function(){
    // document.querySelector(".navigation").innerHTML="Click to Blow the Bulb";
    if(flag==1){
        document.querySelector(".navigation").innerHTML="Click to Blow the Bulb";
    }
    btn.addEventListener("click",function(){
        if(flag==1){
            bulb.style.backgroundColor="yellow"
            btn.innerHTML="off"
            cont.style.backgroundColor="yellow"
            btn.style.backgroundColor="rgb(15, 92, 170)"
            document.querySelector(".navigation").innerHTML="click to off the bulb";
            flag=0;
            
        }
        else{
            
            bulb.style.backgroundColor="transparent"
            cont.style.backgroundColor="transparent"
            btn.style.backgroundColor="red"
            document.querySelector(".navigation").innerHTML="Click to Blow the Bulb";
            btn.innerHTML="on"

            flag=1;
        }
        
    })
    
});

btn.addEventListener("mouseout", function(){
    document.querySelector(".navigation").innerHTML="";
});
btn.addEventListener("mouseover", function(){
    if(flag==0)
{
    document.querySelector(".navigation").innerHTML="click to off the bulb";
}
})
var h1=document.querySelectorAll("h5")
h1.forEach(function(hh){
    console.log(hh) 
    //To print the element
        console.log(hh.textContent)//to print innerHTML

});
// var h5Elements = document.querySelectorAll("h5");

// h5Elements.forEach(function(h5) {
//     console.log(h5.textContent);
// });
var h2=document.querySelector("h4") 
console.log(h2.innerHTML);
var bx=document.querySelector(".box")
// bx.textContent="<h1>Hello</h1>";
bx.innerHTML="<h1>hello</h1><h1>hello</h1><h1>hello</h1>"

