//global variable
var importantFlag = false;
var UI = {};
var serverURL = "http://fsdi.azurewebsites.net/api";




function toggleImportant(){
    if (importantFlag){
        $("#iconImp").removeClass("fas").addClass("far");
        importantFlag=false;
    }
    else{
        $("#iconImp").removeClass("far").addClass("fas");
        importantFlag=true;
    }
    
}
function clearForm(){
    UI.title.val("").focus();
    UI.desc.val("");
    UI.dueDate.val("");
    UI.location.val("");
    UI.alertText.val("");
    var taskStatus = UI.status.val(0);

}

function readFrom(){
    var taskTitle = UI.title.val();
    var taskDescription = UI.desc.val();
    var taskDueDate = UI.dueDate.val();
    var taskLocation = UI.location.val();
    var taskAlertText = UI.alertText.val();
    var taskStatus = UI.status.val();
    console.log(taskStatus);
    

    var task = new Task(taskTitle,taskDescription,importantFlag,taskDueDate,taskLocation,taskAlertText,taskStatus);
    console.log(task);

    //save the task in BE
    $.ajax({
        url: serverURL + "/tasks",
        type: "POST",
        data: JSON.stringify(task),
        contentType: 'application/json',
        success: function(res){
            displayTask(res);
            clearForm();
            console.log("yay it worked", res);
        },
        error: function(err){
            console.log("Houston we have a problem", err);
        }
    });

    console.log(task);

}
function displayTask(task){
    var iconHtml = " ";
    if(task.important){
        iconHtml = '<i id="iconImport" class="fas fa-star">Important!</i>';
    }else{
        iconHtml = '<i id="iconImport" class="far fa-star"></i>';
    };
   
    var statusDesc = " ";
    switch(task.status){
        case "1": 
            statusDesc = "Pending";
            break;
        case "2": 
            statusDesc = "In Progress";
            break;
        case "3": 
            statusDesc = "Blocked";
            break;
        case "4": 
            statusDesc = "Done";
    }

    let syntax = `<div class="tasks">
            <h5>${task.title}            ${iconHtml}</h5>
            <p><strong>ID:</strong> ${task.id}   <strong>Due on:</strong>   ${task.dueDate}</p>
            <p>${task.description}</p>
            <p id="status"><strong>Status:</strong>   ${statusDesc}</p>
            <button id="btnDone" class="btn btn-primary">Done</button>
            <button id="btnEdit" class="btn btn-primary">Edit</button>
            <button id="btnDelete" class="btn btn-primary">Delete</button>
                </div>`;
    $("#displayArea").append(syntax);
}

function testAjax(){
    $.ajax({
        url: "https://restclass.azurewebsites.net/api/test",
        type: "GET",
        success: function(res){
            console.log("yay it worked", res);
        },
        error: function(err){
            console.log("Houston we have a problem", err);
        }
    });
}

function fetchTasks(){
    $.ajax({
        url: serverURL + "/tasks",
        type: "GET",
        success: function(res){
            console.log("yay it worked", res);
         //   displayTask(res);
         //   clearForm();
         for (var i=0;i<res.length;i++){
            let task = res[i];
            if (task.user == "Felipe1"){ 
                displayTask(task);
            } };
        },
        error: function(err){
            console.log("Houston we have a problem", err);
        }
    });
}
function init(){
    //Load data
    UI.title = $("#taskTitle");
    UI.desc = $("#taskDesc");
    UI.dueDate = $("#taskDueDate");
    UI.location = $("#taskLocation");
    UI.alertText = $("#taskAlertText");
    UI.status = $("#taskStatus");

    fetchTasks();

   //Hook events
    $("#btnSave").click(readFrom);
    $("#btnDone").click("");
    $("#btnEdit").click("");
    $("#btnDelete").click("");
    $("#iconImp").click(toggleImportant);
    $("#details").keypress(function (e){
        if (e.key == "Enter") {
        readFrom();
    }
    });
}

window.onload=init;