// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var charLists = [number, specialChar, alphaUpper, alphaUpper];
var randomList = charLists[Math.floor(Math.random()*charLists.length)];


var useUpper = function(){
  return (alphaUpper[Math.floor(Math.random()*alphaUpper.length)]);
}
var useLower = function(){
   return (alphaLower[Math.floor(Math.random()*alphaLower.length)]);
}
var useNumber = function(){
  return (number[Math.floor(Math.random()*number.length)]);
}
var useSpecial = function(){
  return (specialChar[Math.floor(Math.random()*specialChar.length)]);
}

function generatePassword(){

  var passLength = prompt("What would you like the length of your password to be between 8-128 characters?");

  if(passLength < 8 || passLength > 128 || passLength === "" || passLength === null){
    alert("Password must be between 8-128 characters.");
    return generatePassword();
  }

  var upperConfirm = confirm("Would you like to use upper case letters?");
  if(true){
   console.log(useUpper());
  };
  
  var lowerConfirm = confirm("Would you like to use lower case letters?");
  if(true){
    console.log(useLower());
  };
  

  var numberConfirm = confirm("Would you like to use numbers?");
  if(true){
    console.log(useNumber());
  };
  

  var specialConfirm = confirm("Would you like to use special characters?");
  if(true){
    console.log(useSpecial());
  };
  

  /*for(i = 0; i < parseInt(passLength); i++);*/
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);