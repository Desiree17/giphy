// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var search = $("#search-term").val();
  var myNumber = Math.floor(Math.random() * 5);
  $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + search + "&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            $('.container').append("<img src=" +  response.data[myNumber].images.fixed_height.url + ">");
            },
         }); 
    
    });
    

