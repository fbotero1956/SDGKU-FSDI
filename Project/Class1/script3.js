
/* functions more than 3000 Javascript functions

alert("Welcome to Javascript!");

var msg="Welcome to the world";
alert(msg);

var username=prompt("enter your name:");

document.write(`<p>"Welcome to the system <strong> ${username}</strong></p>`);*/

let band="Metallica", song="Enter Sandman";
let spotify;
spotify=band + ":" + song;
console.log(spotify);
spotify=spotify.concat(" ", "is great!");
console.log(spotify);
console.log(spotify.toUpperCase());
console.log(spotify.length);

let useremail="fbotero@gmail.com";
console.log(useremail)
let flag=useremail.includes("@") && useremail.includes(".com")

if (flag == true)
console.log("valid email");
else
console.log("enter a valid email");
let result