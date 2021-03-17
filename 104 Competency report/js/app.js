const ToDoList={
    Tasks:[]
}

class ToDoTask{
    constructor(name,type,dueDate,owner){
        this.name=name;
        this.type=type;
        this.dueDate=dueDate;
        this.owner=owner;
    }
}

var txtName=document.getElementById('toDoName');
var txtType=document.getElementById('toDoType');
var txtDueDate=document.getElementById('toDoDueDate');
var txtOwner=document.getElementById('toDoOwner');

 
addTestData();


function register(){
    if(txtName.value == "" || txtType.value == "" || txtDueDate.value =="" || txtOwner.value == ""){
        alert("Please enter complete information in order to add the task to your ToDo List!");
    }else {

    var theTask = new ToDoTask(txtName.value, txtType.value, txtDueDate.value, txtOwner.value);
    
    ToDoList.Tasks.push(theTask);

    displayTable(theTask);    

    clear();}
}

function clear(){
    txtName.value = "";
    txtType.value = "";
    txtDueDate.value="";
    txtOwner.value="";
}
function addTestData(){
    // add a ouple of test tasks

var hw = new ToDoTask("Homework", "report", "03/24/2021", "Felipe");
ToDoList.Tasks.push(hw);
displayTable(hw); 

var hw = new ToDoTask("Call Sid", "Call", "03/17/2021", "Felipe");
ToDoList.Tasks.push(hw);
displayTable(hw); 
}