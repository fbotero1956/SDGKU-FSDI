function writetowebpage(){
document.write(`<p class=orderalert> Alert, Purchasing Department:  ${userprompt} wants to purchase  ${orderquantity}  ${productname}(s) for a price of: ${productprice} each. </P>`);

document.write(`<p class=ordertotal>Total price for this order including ${salestax}% is: ${Number(productprice) * Number(orderquantity) * (salestax + 1)} </p>`);
}