var reverseInPlace = function(string){
  var splitstring = string.split(" ");
  var reverseArray = [];
  
  for(var i =0; i < splitstring.length; i+=1){
    var word = splitstring.splice(0,1);
    word.join();
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