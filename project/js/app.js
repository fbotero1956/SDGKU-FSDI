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
var c=0;

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
        this.id=c++;
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
    
    salon.pets.push(thePet);
    displayTable(thePet);    
    clear();
    $('#successMsg').text('Your Pet Registration has been successfully added!');
    $('#successMsg').removeClass('notSelected');
    setTimeout(function(){
        $('#successMsg').addClass('notSelected');},2000);
   // $('#successMsg').show().delay(2000).animate('fadeOut');
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
//delete pet from collection and display table
function deletePet(petId){
        
        var indexDelete;
        var tr=$('#'+petId);

        for(var i=0; i<salon.pets.length;i++){
            var selected=salon.pets[i];
            if (selected.id === petId){
                indexDelete = i;
            }
        }
        salon.pets.splice(indexDelete,1);
        tr.remove();
        $('#successMsg').text('Your Pet Registration has been successfully deleted!');
        $('#successMsg').removeClass('notSelected');
        setTimeout(function(){
            $('#successMsg').addClass('notSelected');},2000);
}
    
    // search by pet name, type of pet or service
    function searchPet(){
        var st=$('#searchCriteria').val();
        var ss=$('#searchPet').val();

        var searchString = ss.toLowerCase();
       //using for each
        salon.pets.forEach(aPet=>{
            if(st=="name"){
                if(aPet.name.toLowerCase().includes(searchString)){
                    $('#'+aPet.id).addClass('selected');
                    $('#'+aPet.id).removeClass('notSelected');
                }else {
                    $('#'+aPet.id).removeClass('selected');
                    $('#'+aPet.id).addClass('notSelected');
                    }
            }else if(st=="service"){
                    if(aPet.service.toLowerCase().includes(searchString)){
                        $('#'+aPet.id).addClass('selected');
                        $('#'+aPet.id).removeClass('notSelected');
                    }else {
                        $('#'+aPet.id).removeClass('selected');
                        $('#'+aPet.id).addClass('notSelected');
                          }
                }else if(st=="type"){
                        if(aPet.type.toLowerCase().includes(searchString)){
                            $('#'+aPet.id).addClass('selected');
                            $('#'+aPet.id).removeClass('notSelected');
                        }else {
                            $('#'+aPet.id).removeClass('selected');
                            $('#'+aPet.id).addClass('notSelected');
                             }
                        }
        }); 
    };

/* 
        for(var i=0;i<salon.pets.length;i++){
            var selected=salon.pets[i];

            $('#'+selected.id).removeClass();
            if(st=='name' && searchString === selected.name.toLowerCase()){
                $('#'+selected.id).addClass('selected');
            }else if(st=='type' && searchString === selected.type.toLowerCase()){
                $('#'+selected.id).addClass('selected');
            }else if(st=='service' && searchString === selected.service.toLowerCase()){
                $('#'+selected.id).addClass('selected');
            }else
            $('#'+selected.id).addClass('notSelected');
        }
      
        $('#searchPet').val("");
        $('#searchCriteria').val("name");
  */ 
    function displayAll(){
        for(var i=0;i<salon.pets.length;i++){
            var selected=salon.pets[i];
            $('#'+selected.id).removeClass();
        }
        $('#searchPet').val("");
        $('#searchCriteria').val("name");
    }

    function init(){
       //Initialization
        var scooby= new Pet("Scooby","dog",5,"Dane","male","bath","Felipe","555-555-5555");
        salon.pets.push(scooby);
        displayTable(scooby);
        var scrappy= new Pet("Scrappy","dog",4,"lab","male","bath","Felipe","555-555-5555");
        salon.pets.push(scrappy);
        displayTable(scrappy);
        var mabel= new Pet("Mabel","cat",3,"Tux","female","massage","Felipe","555-555-5555");
        salon.pets.push(mabel);
        displayTable(mabel);
        
        displayInfo();

        //hook events
        $('#register-btn').on('click',register);
        $('#search-btn').on('click',searchPet);
        $('#displayAll-btn').on('click',displayAll);
        $('#searchPet').keypress(function(e){
            if(e.key ==="Enter")
            searchPet();
        });
        $('#searchPet').on('keyup',searchPet);
        

        }
    window.onload=init;
