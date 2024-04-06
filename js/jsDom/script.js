var a = 52;
var b = 524;
console.log(a + b);
var str = "To Print an string";
console.log(str);
var marks = {
    ravi: 60,
    akash: 55,
    rohit: 51,
    navya: 60,
    Aman: 45,
}
console.log(marks);
var a='b';
console.log(a)

// alert("Hello");
// Arithmetic operator
var a = 50, b = 5;
console.log("the sum of a and b=", a + b);
console.log("the subtraction of a and b=", a - b);
console.log("the multiplication of a and b=", a * b);
console.log("the division of a and b=", a / b);
console.log("the modulus of a and b=", a % b);

// Assignment operator
var c = 6, d = 67, e = 66, f = 87;
a = c;
b += 3;
c -= 3;
d *= 3;
e /= 3;
f %= 3;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
// comparision operators
var i = 84, j = 65, k = 43;
console.log(a == b);
console.log(i >= k);
console.log(j <= k);
console.log(c != d);
console.log(k > d);
console.log(d > k);
//logical operators
// && (and)logical operator:
// Example
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var m = 3, n = 6, o = 3;
console.log((m <= n) && m == o);
console.log((m < n) && m > o);
console.log((m > n) && m < o);
console.log((m < n) && m > o);
// || (or) logical operator:
// Example
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log((m <= n) || m == o);
console.log((m < n) || m > o);
console.log((m > n) || m < o);
console.log((m < n) || m > o);
// ! (not) logical operator:
// Example
console.log(!true);
console.log(!false);

console.log(!m == n);
console.log(!m < n);

//Functions in jS

function average(a, b, c, d, e) {
    console.log("average is: ");
    return (a + b + c + d + e) / 2;
}
c2 = average(7, 5, 3, 86, 45);
console.log('average is :'+c2);
function mul(i, j) {
    return i * j;
}
c1 = mul(7, 9);
console.log(c1);

var age = 40;
if (age > 8) {
    console.log("you are not a kid brother");
}
else {
    console.log("you are a kid baby");
}
var array = [5, 6, 8, 3, 4, 9, 0, 12, 16, 14, 18];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log(array);
console.log(array.length);
console.log("foreach Function");
var arr = [8, 52, 45, 35, 47, 45, 4];
arr.forEach(function (var_elements) {
    console.log(var_elements);
});
// arr.forEach(function (length) {
//     console.log(length);
// });
console.log("array size : "+arr.length);
var array1=[10,20,50,90,100];
console.log(array1.length);
console.log(array1[0]);
// let array1 = [34, 43, 45, 454, 54, 5, 4, 476, 8, 7, 64]
let q = 0;
while(q<array1.length)
{
    console.log(array1[q]);
    q ++;
}
let h=0;
do {
    console.log(array1[h]);
    h++;
}
while (h < array1.length);
//-------------------------------------------
//var array = [5, 6, 8, 3, 4, 9, 0, 12, 16, 14, 18]; Array declared upper.
for (var i = 0; i <= array.length; i++) {
    if (i == 2) {
        break;//when i==2 it will out of loop.
    }
    console.log(array[i]);
}
for (var i = 0; i < array.length; i++) {
    if (i == 2) {
        continue;//i==2 will only not print, and other all next will be print.
    }
    console.log(array[i]);
}
let a1 = ["anuj", "ajay", "babu", "sanjay", 25, 54, 0245];//0245 is octal nummber and its decimal value is 165.
console.log(a1.length);
console.log(a1);
a1.pop();//delete from end
console.log(a1.length);
console.log(a1);

a1.push("Aman kumar");//insert at end
console.log(a1.length);
console.log(a1);
a1.shift();//delete at beggining.
console.log(a1.length);
console.log(a1);
a1.unshift("raman");//Inesrt at beggining.
console.log(a1.length);
console.log(a1);
// a1.toString(); // return a String Array.
console.log(a1.toString()); //return a String array.
// console.log(a1.length);
// console.log(a1);
a1.sort();//To short an array.
console.log(a1.length);
console.log(a1);
var s = "I am Bhupendra Verma, Student of MCA in IISE College Lucknow";
console.log(s.length);
console.log(s.indexOf("boy"));//if not found then print -1.
console.log(s.indexOf("MCA"));
console.log(s.indexOf("iise"));
console.log(s.lastIndexOf("am"));//if not found then print -1.
console.log(s.lastIndexOf("of"));
console.log(s.slice(5,19));
y = s.replace("MCA","BCA");
console.log(y);
z = y.replace("IISE College Lucknow","SHDC Sitapur");
console.log(z);
console.log("----------------------");
// To print date
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getFullYear());
console.log(myDate.getUTCFullYear());
console.log(myDate.getDay());
console.log(myDate.getSeconds());

let hour=myDate.getHours();
let minute=myDate.getMinutes();
let sec=myDate.getSeconds();
console.log(hour,":",minute,":",sec);

