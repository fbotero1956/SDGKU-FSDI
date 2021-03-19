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


class Pet{
    constructor(name,type,age,gender,breed,service,owner,phone){
        this.name=name;
        this.type=type;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.price=0;
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

    // validate data prior to adding pet
    if(txtName.value == "" || txtType.value =="" || txtAge.value =="" || txtGender.value =="" || txtBreed.value =="" || txtService.value =="" || txtOwner.value == "" || txtPhone.value ==""){
        alert(`Required data is missing, please enter all the data requested in order to register your petster.`)
    }
    else{
    var thePet = new Pet(txtName.value, txtType.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value);
    
    console.log(thePet);
    salon.pets.push(thePet);
    displayTable(thePet);    
    clear();
}
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

function profitCalculation(){
    var sum=0;
    for (var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;}
    
   $('#profits').css("background-color", "aqua");
   $('#profits').html(`Revenue: $${sum}`);
}
function countPets(){
    var sumDogs=0;
    var sumCats=0;
    var sumBirds=0;

    for (var i=0;i<salon.pets.length;i++){
        if(salon.pets[i].type == 'dog'){
            sumDogs= sumDogs+1;
        }else if (salon.pets[i].type =='cat'){
            sumCats= sumCats + 1;    
        }else if (salon.pets[i].type == 'bird'){
            sumBirds = sumBirds + 1;
        }

    }
    $('#countPetTypes').html(`There are: ${sumDogs} <i class="fas fa-dog"></i>, ${sumCats} <i class="fas fa-cat"> and ${sumBirds} <i class="fas fa-crow"></i> registered.`);
    $('#countPetTypes').css("background-color", "aqua");
}
function displayInfo(){
    //object destructuring
    var{name,address:{city,street,number},hours:{open,close}}=salon;
    document.getElementById("footer-info").innerHTML=`
    <p> <strong>${name}</strong></p>
    <p> ${number} ${street}, ${city}</p>
    <p> Hours are from ${open} to ${close}</p>
    <p> Monday through Saturday</p>`;
    }
    function init(){
       //Initialization
        var scooby= new Pet("Scooby","dog",50,"Dane","male","shower","Felipe","555-555-5555");
        salon.pets.push(scooby);
        displayTable(scooby);
        var scrappy= new Pet("Scrappy","dog",40,"lab","male","shower","Felipe","555-555-5555");
        salon.pets.push(scrappy);
        displayTable(scrappy);
        
        displayInfo();

        //hook events

        }
    window.onload=init;
