$('#baths').on("click", function(){
    $('#bathing').show();
    $('#hairtrim').hide();
    $('#grooming').hide();
})

$('#hair').on("click", function(){
    $('#bathing').hide();
    $('#hairtrim').show();
    $('#grooming').hide();
})

$('#groom').on("click", function(){
    $('#bathing').hide();
    $('#hairtrim').hide();
    $('#grooming').show();
})

