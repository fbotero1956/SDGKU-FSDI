
function readMsg(){
    var contactName = "";
    var contacteMail = "";
    contactName = clientName.val();
    contacteMail = eMail.val();
    var contactMsg = message.val();
    //validation of name, must not be blank
    if (contactName == ""){
        $("#alertName").removeClass("hidden");
        clientName.focus()
        setTimeout(function(){
        $("#alertName").addClass("hidden");
        }, 5000);
        return;
        } 

        //validate email address properly
    if (ValidateEmail(contacteMail)== false){
        $("#alertMail").removeClass("hidden");
        eMail.focus();
        setTimeout(function(){
            $("#alertMail").addClass("hidden");
        }, 5000);
        return;
        }     

        //create an object and write it to the console
        var customerMsg = new ContactMsg(contactName,contacteMail,contactMsg);
        $("#alertMsg").html(contactName + ", thank you for your question.  We will get back to you shortly");
        $("#alertMsg").removeClass("hidden");
        setTimeout(function(){
            $("#alertMsg").addClass("hidden");
        }, 5000);
        clearForm();
        console.log(customerMsg);
    
}
function ValidateEmail(mail) 
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.match(mailformat))
    {
    return true;
    }
    else
    {
    return false;
    }
}
    

function clearForm(){
    clientName.val("").focus();
    eMail.val("");
    message.val("");
}

function init(){
    //Load data

    clientName = $('#clientName');
    eMail = $('#eMail');
    message = $('#message');

   //Hook events

    $('#btnSubmit').click(readMsg);
    $('#btnClear').click(clearForm);
   
    }


window.onload=init;
