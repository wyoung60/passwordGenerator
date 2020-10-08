//Character Arrays
var specialCharArray = ["$", "(", "<", "@", "[", "^", "_", "{"];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseArray = [];

for (var i = 0; i < lowerCaseArray.length; i++) {
  upperCaseArray[i] = lowerCaseArray[i].toUpperCase();
}
var combinedArray = [];

for (var i = 0; i < specialCharArray.length; i++) {
  console.log(specialCharArray[i]);
}

//return value for password variable in writePassword()
function generatePassword() {
  //Global variables for user inputs
  var passwordLength = prompt("Choose length between 8 to 128");
  var specialChar = confirm("Would you like special characters?");
  var upperCase = confirm("Would you like upper case letters?");
  var lowerCase = confirm("Would you like lower case letters?");
  var numberUse = confirm("Would you like to use numbers?");

  if (specialChar) {
    combinedArray = combinedArray.concat(specialCharArray);
  }

  if (upperCase) {
    combinedArray = combinedArray.concat(upperCaseArray);
  }

  if (lowerCase) {
    combinedArray = combinedArray.concat(lowerCaseArray);
  }

  if (numberUse) {
    combinedArray = combinedArray.concat(numbersArray);
  }
  var userPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    indexLocation = Math.floor(Math.random() * combinedArray.length);
    tempValue = String(combinedArray[indexLocation]);
    userPassword = userPassword + tempValue;
  }
  return userPassword;
}

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
