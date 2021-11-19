// Assignment code here
// define function generatePassword
function generatePassword () {

// 1. prompt the user with criteria: 
//a. length(8-128)
var length = window.prompt("Please choose a password length between 8-128.");

//b. prompt user for criteria (uppercase, lowercase, symbols)
 // at least one criteria needs to be included

var upperCase = confirm("Do you want to include uppercase?");
var lowerCase = confirm("Do you want to include lowercase?");
var numbers = confirm("Do you want to include numbers?");
var symbols = confirm("Do you want to include symbols?");


// 2. input validation
// a. target length 8-128 AND null values

if ((length < 8)  || (length > 128)) { 
    window.alert("You need to choose a length between 8-128. Please try again.");
return generatePassword();
}
 if ((length >=8) || (length <= 128)) {
// do what??  store for later??
 }
// b. at least one criteria needs to be included (out of 4)
if (!upperCase && !lowerCase && !numbers && !symbols) {
  window.alert("You need to choose at least one criteria. Please try again.");
  return generatePassword();
}

  //define variables
  var upperText = "ABCDE"
  var lowerText = "abc"
var numberText = "1234567890"
var symbolText ="*&^%$"

var possibleText = "";
if (upperCase) {
  possibleText += upperText;
}
if (lowerCase) {
  possibleText += lowerText;
}
if (numbers) {
  possibleText += numberText;
}
if (symbols) {
  possibleText += symbolText;
}
console.log(possibleText)
// 3. generate password
var chosenPassword = "" 

for (var i = 0; i < length; i++) {
  var randomText = possibleText[Math.floor(Math.random() * possibleText.length)]
chosenPassword += randomText;
}





// 4. display password
return chosenPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



