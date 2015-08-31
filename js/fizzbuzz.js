$(document).ready(function(){

  $("#num_input").on("keypress", function(event){
    if ( event.which == 13 ) {
      fizz_buzz();
    }
  });

  $("#num_submit").on("click", function(){

    fizz_buzz();

  });


function fizz_buzz() {

  var num = $("#num_input").val();

  $('.solution').append('<li id="' + num + '">' + num + '</li>');
  $("#num_input").val('');

};

});



for (var i=1; i <= 100; i++) {
    if (i % 15 === 0)
        console.log("fizzbuzz");
    else if (i % 5 === 0)
        console.log("buzz");
    else if (i % 3 === 0)
        console.log("fizz");
    else
    console.log(i);
}