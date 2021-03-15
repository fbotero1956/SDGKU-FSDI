function display(aPet){
    //document.getElementById("pets").innerHTML=" ";

   // for(var i=0;i<salon.pets.length;i++){
        //var aPet=salon.pets[i];
        var tmpl=`
        <div>
            <h3>${aPet.name}</h3>
            <p> Type: ${aPet.type} </P>
            <p> Age: ${aPet.age} </P>
            <p> Gender: ${aPet.gender}</p>
            <p> Breed: ${aPet.breed}</P>
            <p> Service: ${aPet.service}</p>
            <p> Owner: ${aPet.owner}</p>
            <p> Phone: ${aPet.phone}</p>
        </div>
        `;
      document.getElementById("pets").innerHTML+=tmpl;
   

   //display();
    
    
}
function displayTable(aPet){
    var row=`
    <tr>
        <td>${aPet.name}</td>
        <td>${aPet.type}</td>
        <td>${aPet.age}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.owner}</td>
        <td>${aPet.phone}</td>
    </tr>
    `;
    console.log(row);
    document.getElementById("petTable").innerHTML +=row;
}