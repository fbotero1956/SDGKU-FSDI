//global variable
var importantFlag = false;
var toggleForm = true;
var myTasks = [];
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
    UI.taskId.val("");
    UI.title.val("").focus();
    UI.desc.val("");
    UI.dueDate.val("");
    UI.location.val("");
    UI.alertText.val("");
    var taskStatus = UI.status.val(0);
    if (importantFlag) toggleImportant();

}

function readFrom(){
    var taskTitle = UI.title.val();
    var taskDescription = UI.desc.val();
    var taskDueDate = UI.dueDate.val();
    var taskLocation = UI.location.val();
    var taskAlertText = UI.alertText.val();
    var taskStatus = UI.status.val();
    //validation code
    if (taskTitle.length < 5){
    $("#alertTitle").removeClass("hidden");
    $("#taskTitle").focus();
    setTimeout(function(){
        $("#alertTitle").addClass("hidden");
    }, 5000);
    return;
    } 
    if (taskDescription.length >= 1 && taskDescription.length <= 30){
        $("#alertDesc").removeClass("hidden");
        $("#taskDesc").focus();
        setTimeout(function(){
            $("#alertDesc").addClass("hidden");
        }, 5000);
        return;
        }     

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
function taskClicked(id){

    
    //loop throught the array myTasks to identify the clicked task
    for(var i=0;i<myTasks.length;i++){
        myTask = myTasks[i];

        if (myTasks[i].id == id){
        toggleForm = true;
        toggleFormDisplay();
        UI.taskId.val(`${myTasks[i].id}`);
        UI.title.val(`${myTasks[i].title}`).focus();
        UI.desc.val(`${myTasks[i].description}`);
        const theDate = moment(`${myTasks[i].dueDate}`).format("yyyy-MM-DDThh:mm");
        UI.dueDate.val(theDate);
        UI.location.val(`${myTasks[i].location}`);
        UI.alertText.val(`${myTasks[i].alert}`);
        var taskStatus = myTasks[i].status;
        var statusDesc = " ";
        switch(taskStatus){
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
        UI.status.val(`${statusDesc}`);

        if (myTasks[i].important == true){

            importantFlag = false;
            toggleImportant();
        }else {
            importantFlag = true;
            toggleImportant();
        }

        return;
    };
}
}
function displayTask(task){
    var iconHtml = " ";
    myTasks.push(task);
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

    var theDate = new Date(task.dueDate);

    let syntax = `<div id=${task.id} onclick="taskClicked(${task.id})" class="tasks">
            <h5>${task.title}            ${iconHtml}</h5>
            <p><strong>ID:</strong> ${task.id}   <strong>Due on:</strong>   ${theDate.toDateString()}<strong>Status:</strong>   ${statusDesc}</p>
            <p>${task.description}</p>
            <button id="btnEdit" class="btn btn-primary">Edit</button>
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
function toggleFormDisplay(){

    if(toggleForm){
    $('#details').removeClass('hidden');
    $('#btnDetails').text('Hide Details');
    toggleForm = false;
}else {
    $('#details').addClass('hidden');
    $('#btnDetails').text('Show Details');
    toggleForm = true;
}
}
function deleteTask(){
    const id = UI.taskId.val();
    $.ajax({
        url: serverURL + "/tasks/" + id,
        type: "DELETE",
        success: function(res){
            $(`#${id}`).remove();
            clearForm();
        },
        error: function(err){
            console.log("Houston we have a problem on delete", err);
        }
    });
}
function init(){
    //Load data
    UI.taskId = $("#taskId");
    UI.title = $("#taskTitle");
    UI.desc = $("#taskDesc");
    UI.dueDate = $("#taskDueDate");
    UI.location = $("#taskLocation");
    UI.alertText = $("#taskAlertText");
    UI.status = $("#taskStatus");


    fetchTasks();

   //Hook events
    $('#btnDetails').click(toggleFormDisplay);
    $("#btnSave").click(readFrom);
    $("#btnEdit").click("");
    $("#btnDelete").click(deleteTask);
    $("#btnClear").click(clearForm);
    $("#iconImp").click(toggleImportant);
    $("#details").keypress(function (e){
        if (e.key == "Enter") {
        readFrom();
    }
    });
}

window.onload=init;