const salestax=.08;
var orderquantity, productname, productprice;

function placeorder(userprompt){
    productname=prompt("enter the Product name: ");
    productprice=prompt("Enter the product price: ");
    orderquantity=prompt(`Enter how many ${productname} (s) you want: `);
    console.log(userprompt + " wants to purchase " + orderquantity + " "+ productname + "(s) for a price of: " + productprice + " each.");
    console.log(`Total price for the order is: ${Number(productprice) * Number(orderquantity) * (salestax + 1)}.`);
}
var userdb="fbotero@gmail.com";
var passdb="555555";

var userprompt=prompt("Enter your username: ");
var passprompt=prompt("Enter your password: ");
console.log(userprompt);
console.log(passprompt);

if (userprompt == userdb && passprompt == passdb){
    document.write(`<p> Welcome to the system ${userprompt} </P>`);
    placeorder(userprompt);
    writetowebpage();
}else{
    document.write(`<p class="alert"> Invalid username or password </p>`);
}
