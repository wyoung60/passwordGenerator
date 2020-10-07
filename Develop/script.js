//Global variables for user inputs
var specialChar = confirm("Would you like special characters?");
var upperCase = confirm("Would you like upper case letters?");
var lowerCase = confirm("Would you like lower case letters?");
var numberUse = confirm("Would you like to use numbers?");
console.log(specialChar);
console.log(upperCase);
console.log(lowerCase);
console.log(numberUse);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
