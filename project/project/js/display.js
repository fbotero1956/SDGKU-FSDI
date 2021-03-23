
function displayTable(aPet){
    
    //set the price for the services
    if (aPet.service==="bath"){
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
   //build table row
    var row=`
    <tr id='${aPet.id}'>
        <td>${aPet.name}</td>
        <td>${icon}</td>
        <td>${aPet.age}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.owner}</td>
        <td>${aPet.phone}</td>
        <td>$${aPet.price}</td>
        <td> <button class="btn btn-danger" onclick="deletePet(${aPet.id})">Delete</button></td>
    </tr>
    `;
   //insert table row
    $('#petTable').append(row);
    //recalculate the revenue
    profitCalculation();
    //update pet count
    countPets();

}