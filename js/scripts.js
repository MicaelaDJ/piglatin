// ### Business Logic ###
var vowels = ["a", "e", "i", "o", "u"];
// var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

var pigLatin = function(words) {
  if (words.length === 1) {
    return words + "ay";
  }
  else if (words[0] === vowels[0 || 1 || 2 || 3 || 4]) {
    return words + "way";
  }
  // else if (words[0 && 1] !== vowels[0 || 1 || 2 || 3 || 4]) {
  //   return words + words[0] + words[1] + "ay";
  // }
  else {
    return false;
  };
};

// ### User Interface ###
$(document).ready(function(){
  $("form#pigForm").submit(function(event){
  event.preventDefault();
  var userInput = $("#userSentence").val();
  var words = userInput.split("");
  console.log(words);
  var result = pigLatin(userInput);

  $(".result").text(result);
  });
});
