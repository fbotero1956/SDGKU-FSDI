const salon={
    name:'The Fashion Pet',
    address:{
        city:'Flemington, NJ',
        street:'Main Street',
        number:'123'
    },
    hours:{
        open:'9:00am',
        close:'7:00pm'
    },
    pets:[]
}
//object destructuring
var{name,address:{city,street,number},hours:{open,close}}=salon;

function displayInfo(){
document.getElementById("footer-info").innerHTML=`
<p> <strong>${name}</strong></p>
<p> ${number} ${street}, ${city}</p>
<p> Hours are from ${open} to ${close}</p>
<p> Monday through Saturday</p>`;
}

displayInfo();

class Pet{
    constructor(name,type,age,gender,breed,service,owner,phone){
        this.name=name;
        this.type=type;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.services=service;
        this.owner=owner;
        this.phone=phone;
    }
}

// create register function
var txtName=document.getElementById('petName');
var txtType=document.getElementById('petType');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('petOwner');
var txtPhone=document.getElementById('petPhone');


function register(){
    console.log(txtName.value);
    console.log(txtType.value);
    console.log(txtAge.value);
    console.log(txtBreed.value);
    console.log(txtGender.value);
    console.log(txtService.value);
    console.log(txtOwner.value);
    console.log(txtPhone.value);

    var thePet = new Pet(txtName.value, txtType.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value);
    
    console.log(thePet);
    salon.pets.push(thePet);
    display(thePet);
    displayTable(thePet);    
    clear();
}

function clear(){
    txtName.value = "";
    txtType.value = "";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}
