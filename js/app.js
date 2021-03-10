const salon={
    name:'The Fashion Pet',
    address:{
        city:'Flemington',
        street:'Main',
        number:'123'
    },
    hours:{
        open:'9:00am',
        close:'7:00pm'
    },
    pets:[
        {
            name:"Scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Shower",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:40,
            gender:"Male",
            breed:"Boxer",
            service:"Cut",
            owner:"Lady Gaga",
            phone:"777-555-5555"
        },
        {
            name:"Funny",
            age:25,
            gender:"Male",
            breed:"Lab",
            service:"Cut",
            owner:"Bugs Bunny",
            phone:"999-555-5555"
        },
        {
            name:"Fancy",
            age:40,
            gender:"Female",
            breed:"French Poodle",
            service:"Cut",
            owner:"Shaggy",
            phone:"444-555-5555"
        },
        {
            name:"Speedy",
            age:30,
            gender:"Female",
            breed:"dane",
            service:"Nails",
            owner:"Bugs Bunny",
            phone:"888-555-5555"
        }
    ]
}
//object destructuring
var{name,address:{city,street,number},hours:{open,close}}=salon;

function displayInfo(){
document.getElementById("footer-info").innerHTML=`
<p> <strong>${name}</strong></p>
<p> ${number} ${street}, ${city}</p>
<p> Hours are from ${open} to ${close}</p>`;

document.getElementById("footer-names").innerHTML=`<p> There are currently <strong>${salon.pets.length}</strong> pets registered.  <br></p><p><center>${registered}</center></p>`;
}

var registered="";

for(i=0;i<salon.pets.length;i++){
    registered+=`<p> ${salon.pets[i].name}</p>`
}
displayInfo();