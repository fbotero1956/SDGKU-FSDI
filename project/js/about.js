var index=1;
var aboutMsg = ['Let us give your pet a bath they will love...', 'Your pet will feel like a million after a trim...', 'A day at the spa with friends is the best...', 'You know how good you feel after a massage?', 'Tender, Loving Care is what we are experts at...']
//hide images
function displayNext(){
    var subIndex=0;
    index = index + 1;
    if(index >= 6){index=1;}
    $('#imagePort').html(`<img src="img\\img${index}.jpg" alt="dog" width="150" height="150" ></img>`);
    subIndex=index;
    var s=aboutMsg[index-1];
    $('#imageMsg').text(`${s}`);

}
function displayPrev(){
    index = index - 1;
    if(index <= 0){index=5;}
    $('#imagePort').html(`<img src="img\\img${index}.jpg" alt="dog" width="150" height="150" ></img>`);
    var s=aboutMsg[index-1];
    $('#imageMsg').text(`${s}`);
}

function init(){
    //Initialization


     //hook events
     $('#submit-btn').click(function(){
        console.log($('#custMsg').val());
        $('#custSuccessMsg').text(`${$('#custName').val()} thank you for your message, we will get back to you shortly!!!`);
        $('#custSuccessMsg').removeClass('notSelected');
        setTimeout(function(){
            $('#custSuccessMsg').addClass('notSelected');},3000);
        $('#custName').val("");
        $('#custEmail').val("");
        $('#custMsg').val("");
       
     });

     }
 window.onload=init();