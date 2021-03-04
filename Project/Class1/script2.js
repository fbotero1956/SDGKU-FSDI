/* display 1 to 100 in two columns */

for (i=1; i<=100; i+= 2){
document.writeln(`${i}  ${i+1} <br>`);
}
/* script with an if statement */

for (i=1; i<=100; i+= 2){
    
    if ((i % 3) == 0 || (i % 5) == 0)
    document.writeln(`${i}  ${i+1} <br>`);
}