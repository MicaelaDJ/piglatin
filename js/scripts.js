// ### Business Logic ###
var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = function(words) {
  if (words.length === 1) {
    return words + "ay";
  }
  else if (words[0] === vowels[0] || words[0] === vowels[1] || words[0] === vowels[2] || words[0] === vowels[3] || words[0] === vowels[4]) {
    return words + "way";
  }
  else if (words[1] !== vowels[0]|| words[1] !== vowels[1] || words[1] !== vowels[2]|| words[1] !== vowels[3] || words[1] !== vowels[4]) {
    return words.slice(2) + words[0] + words[1] + "ay";
  }
  else if (words[0] !== vowels[0] || words[0] !== vowels[1] || words[0] !== vowels[2] || words[0] !== vowels[3] || words[0] !== vowels[4]) {
    return words.slice(1) + words[0] + "ay";
  }
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
