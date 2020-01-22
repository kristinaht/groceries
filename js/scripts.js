$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var first1 = $("input#first1").val();
    var second2 =$("input#second2").val();
    var third3 = $("input#third3").val();
    var things = [first1, second2, third3];


    console.log(things);
    // $("#secoundItem").text(things[1]);
    // $("#thirdItem").text(things[2]);
    // $("#result").show();
    
    things.forEach(function(thing, index) {

      $("#item" + index).text(thing);
      
      console.log(thing, index);
    });
    $("#result").show();

  });
  
});