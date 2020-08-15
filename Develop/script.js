// Assignment Code
var generateBtn = document.querySelector("#generate");

//Available character arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Empty arrays to pull to
var output = [];
var randomize = [];


function generatePassword() {

  var passLength = prompt("What would you like the length of your password to be between 8-128 characters?");

  if (passLength < 8 || passLength > 128 || passLength === "" || passLength === null) {
    alert("Password must be between 8-128 characters.");
    return generatePassword();
  }

  var upperConfirm = confirm("Would you like to use upper case letters?");
  var lowerConfirm = confirm("Would you like to use lower case letters?");
  var numberConfirm = confirm("Would you like to use numbers?");
  var specialConfirm = confirm("Would you like to use special characters?");

  //Combine arrays if above are true and join together and end to produce random string

  if (upperConfirm) {
    randomize = randomize.concat(alphaUpper);
  }

  if (lowerConfirm) {
    randomize = randomize.concat(alphaLower);
  }

  if (numberConfirm) {
    randomize = randomize.concat(number);
  }

  if (specialConfirm) {
    randomize = randomize.concat(specialChar);
  }

  for (var i = 0; i < parseInt(passLength); i++) {
    output.push(randomize[Math.floor(Math.random() * randomize.length)]);
  }
  return output.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);