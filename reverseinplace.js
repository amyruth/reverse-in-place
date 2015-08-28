//handles sentences as well as single words

var reverseInPlace = function(string){
  //turn the string into an array of words
  var splitstring = string.split(" ");
  //array for the words as they're being reversed
  var reverseArray = [];
  
  for(var i =0; i < splitstring.length; i+=1){
    //removes 1st word from array
    var word = splitstring.splice(0,1);
    //turn it into a string, then splits into individual letters
    //reverse array and rejoins as string
    word = word.join().split("").reverse().join("");
    reverseArray.push(word);
    i-= 1;
  }
  var reverseString = reverseArray.join(" ");
  return reverseString;
};

$(document).ready(function(){
  $('#blanks').submit(function(event){
    var source = $('#sourceText').val();
    var answer = reverseInPlace(source);

    $('#reversed').text(answer);
    $('#results').show();

    event.preventDefault();
  });
});