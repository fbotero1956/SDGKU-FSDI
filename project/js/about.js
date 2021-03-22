var index=1;
//hide images
function displayNext(){
    index = index + 1;
    if(index >= 6){index=1;}
    $('#imagePort').html(`<img src="img\\img${index}.jpg" alt="dog" width="150" height="150" ></img>`);

}
function displayPrev(){
    index = index - 1;
    if(index <= 0){index=5;}
    $('#imagePort').html(`<img src="img\\img${index}.jpg" alt="dog" width="150" height="150" ></img>`);

}

function init(){
    //Initialization
   
     //var myCarousel = document.querySelector('#myCarousel')
     //var carousel = new bootstrap.Carousel(myCarousel)

     //hook events

     }
 window.onload=init;