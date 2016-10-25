var stress=0;
var result;
var factors = [];
var inputPalindrome;
var numberEntered;
var allNumbers = [];
var primeTest;
var newArray=[];
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
  var primeArray = []
  var checkPrime = function(number) {
    for (i = 2; i <= number; i++) {
      primeArray.push(i);
    }
    for (i = 0; i <= number; i++) {
      newArray[i]=true;
    }
    // console.log(primeArray);
    for (j = 0; j<= primeArray.length/2; j++) {
      var multiplesOfNumber = primeArray.filter(function(a) {
        // console.log("a is:"+a+ "pArray: "+ primeArray[j]+"modulus: "+ (a % primeArray[j]));
        if(a % primeArray[j]=== 0){
          return true;
        }
      });

      // console.log("answer "+multiplesOfNumber);
      for(x=1;x<=multiplesOfNumber.length;x++){
        newArray[multiplesOfNumber[x]]=false;
      }
    }

    // console.log(newArray);
  }

//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,...
// var checkPrime = function(number) {
//
//   for (i = 2; i <= number; i++) {
//     allNumbers[i] = true;
//   }
//   for (i = 4; i <=number; i++) {
//     if ((i % 2) === 0) {allNumbers[i] = false;}
//   }
//   for (i = 6; i <=number; i++) {
//     if ((i % 5) === 0) {allNumbers[i] = false;}
//   }
//   for (i = 4; i <=number; i++) {
//     primeTest=i.toString().split("");
//     var temp=primeTest.map(function(a){return parseInt(a)});
//     var answer=primeTest.reduce(function(a,b){return(a+b)});
//     if ((answer % 3)=== 0){allNumbers[i] = false;}
//
//   }
  // console.log(allNumbers);
// }

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
  $("#primes form").submit(function(event) {
    event.preventDefault();
    $("#primesResults ul").empty();
    newArray=[];
    multiplesOfNumber=[];
    primeArray=[];
    inputNumber = $("#primes form input:text").val();
    checkPrime(inputNumber);
    for(y=2;y<=newArray.length;y++){
      if(newArray[y]===true){
        $("#primesResults ul").append("<li>"+y+"</li>");
      }
    }
  })
});
