// Calculator
/* get the arguments for the calculation */
var num1=Number(prompt('Enter the first numer:'));
var num2=Number(prompt('Enter the second numer:'));

/* functions that will perfomr the calculation */
function add(a,b){
    return(a+b);
}
function subtract(a,b){
    return(a-b);
}
function multiply(a,b){
    return(a*b);
}
function divide(a,b){
    return(a/b);
}

/* Get the desired operation, if inputs are correct call the appropriate function and return the answer */

if (Number.isNaN(num1) || Number.isNaN(num2)){
    document.write(`<p class="answer alert"> Must enter valid numeric arguments!</p>`);
}else {
switch(prompt("Enter the operator (ie. +, -, *, /):")){
    case '+':
        document.write(`<p class="answer"> ${num1} + ${num2} = ${add(num1,num2)} </p>`);
        break;
    case '-':
        document.write(`<p class="answer"> ${num1} - ${num2} = ${subtract(num1,num2)} </p>`);
        break;
    case '*':
        document.write(`<p class="answer"> ${num1} * ${num2} = ${multiply(num1,num2)} </p>`);
        break;
    case '/':
        document.write(`<p class="answer"> ${num1} / ${num2} = ${divide(num1,num2)} </p>`);
         break;
    default:
        document.write(`<p class="answer alert"> Must enter a valid operator or "Exit"</p>`);
        break;
}
}
