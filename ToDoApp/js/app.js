
function saveToDo(){

    var ToDo = $('#todoText').val();
    if (ToDo != ""){
    var syntax = "<h6>" + ToDo + "</h6>";
    $('#pendingToDos').append(syntax);
    $('#todoText').val('').focus();
};

}
function init(){
$('#todoText').val('');
$('#btnSave').click(saveToDo);
$('#todoText').keypress(function(e){
    if(e.key == "Enter"){
        saveToDo();
    }
});
}


window.onload = init;