var global=10;
function hello(msg){
    console.log(msg);
    console.log(global);
}
hello("hello function call");

let msg1="hello message";
hello(msg1);

let traveling=function(country){
    console.log(global);
    console.log(msg1);
   return "I am traveling to " + country;
}

let travel;

travel=traveling("Italy");
console.log(travel);

function sum(a, b){
    console.log(a+b);
}
function multi(a,b){
    console.log(a*b);
}
sum(5, 2);
multi(5,6);

/* auto calling function */
(function(topic){
    console.log("I am learning "+ topic);
})("JS");
