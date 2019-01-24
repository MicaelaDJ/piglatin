// ### Business Logic ###
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

var pigLatin = function(userInput) {
    return false;
};


// ### User Interface ###
$(document).ready(function(){
  $("form#pigForm").submit(function(event){
  event.preventDefault();
  var userInput = $("#userSentence").val();
  console.log(userInput);
  var result = pigLatin(userInput);

  $(".result").text(result);
  });
});
