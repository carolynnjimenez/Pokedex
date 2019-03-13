
// Question #1: 
$("#select").click(function() {
    //Your Code Goes Here
    var choice = $("#choice").val();
    var input = "https://pokeapi.co/api/v2/pokemon/" + choice;
    
    $.ajax({
        url: input,
        method: "GET",
        success: function(response) {
            $('body').append("<br><img src=" + response.sprites.front_default + ">");
            
        },
    }); 
    
});

