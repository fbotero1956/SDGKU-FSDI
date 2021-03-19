
function displayTable(aPet){
    

    if (aPet.service==="shower"){
       aPet.price=20;
   }else if (aPet.service==="nails"){
       aPet.price=15;
   }else aPet.price=25;

   //add the type of pet
   var icon = "";
   if(aPet.type == 'dog'){
      icon = '<i class="fas fa-dog"></i>';
   }else if(aPet.type == 'cat'){
       icon = '<i class="fas fa-cat"></i>';
   }else if(aPet.type == 'bird'){
      icon = '<i class="fas fa-crow"></i>';
   }
  
   
    var row=`
    <tr>
        <td>${aPet.name}</td>
        <td>${icon}</td>
        <td>${aPet.age}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.owner}</td>
        <td>${aPet.phone}</td>
        <td>$${aPet.price}</td>
    </tr>
    `;
    //console.log(row);
    //document.getElementById("petTable").innerHTML +=row;
    $('#petTable').append(row);
    profitCalculation();
    countPets();
    

    //<i class="fal fa-horse"></i>
    //<i class="fas fa-sheep"></i>
    //<i class="fas fa-cat"></i>'
    //<i class="fas fa-crow"></i>

}