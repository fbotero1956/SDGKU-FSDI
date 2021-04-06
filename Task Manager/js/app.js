//global variable
var importantFlag = false;
var UI = {};



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
    var taskDesc = UI.desc.val();
    var taskDueDate = UI.dueDate.val();
    var taskLocation = UI.location.val();
    var taskAlertText = UI.alertText.val();
    var taskStatus = UI.status.val();

    var task = new Task(taskTitle,taskDesc,importantFlag,taskDueDate, taskLocation,taskAlertText,taskStatus);

    clearForm();

    console.log(task);

}

function init(){
    //Load data
    UI.title = $("#taskTitle");
    UI.desc = $("#taskDesc");
    UI.dueDate = $("#taskDueDate");
    UI.location = $("#taskLocation");
    UI.alertText = $("#taskAlertText");
    UI.status = $("#taskStatus");


   //Hook events
    $("#btnSave").click(readFrom);
    $("#iconImp").click(toggleImportant);
    $("#details").keypress(function (e){
        console.log("key pressed"+ e.key);
        if (e.key == "Enter") {
        readFrom();
    }
    });
}

window.onload=init;