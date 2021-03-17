//add a row to the table
var idNum=0;
function displayTable(aTask){
    idNum++;
    var row=`
    <tr id=${idNum}>
        <td>${aTask.name}</td>
        <td>${aTask.type}</td>
        <td>${aTask.dueDate}</td>
        <td>${aTask.owner}</td>
        <td><button onClick="removeRow(${idNum})" type="button" class="btn">Done</button></td>
    </tr>
    `;
    console.log(row);
    document.getElementById("ToDoTable").innerHTML +=row;
}
function removeRow(num){
    document.getElementById(num).remove();
}