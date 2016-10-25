var stress=0;
var result;
var factors = [];
var inputPalindrome;
var numberEntered;

var checkPalindrome = function(palindrome){
  spaceLessPalindrome=palindrome.split("").filter(function(a){
    return a!==" ";
  });

  var reverse=spaceLessPalindrome.reverse().join("");
  console.log("original: " + spaceLessPalindrome.join(""));
  console.log("reverse: " + reverse);
  if(reverse.toLowerCase()===spaceLessPalindrome.join("").toLowerCase()){
    console.log("YESSS");
  }
  else{
    console.log("NOO");
  }
}


var getFactorial = function(numberEntered) {
  for (i = 1; i <= numberEntered; i++) {
    factors.push(i);
  }
  result = factors.reduce(function(a, b) {
    return a * b;
  })
}

$(function(){
  $("#warningSigns form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      stress++;
      $("#healthSymptoms").show();
      $("#warningSigns").hide();
    });
  });
  $("#healthSymptoms form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=healthSymptoms]:checked").each(function(){
      stress+=2;
      $("#copingMethods").show();
      $("#healthSymptoms").hide();
    });
  });
  $("#copingMethods form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=CopingMethods]:checked").each(function(){
      stress-=2;
      $("#copingMethods").hide();
      $("#stressResults").show();
    });
    if(stress<8){
      $("#stressResults").append("You are not stressed, go get an icecream");
    }
    else if (stress>8 && stress < 12) {
      $("#stressResults").append("You are a bit stressed, go lay down");
    }
    else{
      $("#stressResults").append("You are insanely stressed!!, beer time!!");
    }

  });

  $("#factorials form").submit(function(event) {
    event.preventDefault();
    result = 0;
    factors = [];
    numberEntered = parseInt($("#factorials form input:text").val());
    $("#factorialsResults").show()
    if (typeof numberEntered === "number" && numberEntered > 0) {
      getFactorial(numberEntered);
      $("#factorialsResults").text("The factorial of " + numberEntered + " is " + result);
    } else if (numberEntered > 170) {
      $("#factorialsResults").text("That number is too high! Just use google...");
    } else if (numberEntered === 0) {
      result = 1;
    } else {
      alert("Please enter a POSITIVE number");
    }
  });
  $("#palindromes form").submit(function(event) {
    event.preventDefault();
    inputPalindrome=$("#palindromes form input:text").val();
    checkPalindrome(inputPalindrome);
  });
});
