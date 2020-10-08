//Character variables and arrays created with .from method
var specialCharacters = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"';
var specialCharArray = Array.from(specialCharacters);
var numberCharacters = "1234567890";
var numbersArray = Array.from(numberCharacters);
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = Array.from(lowerCaseCharacters);
var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
var upperCaseArray = Array.from(upperCaseCharacters);

//return value for password variable in writePassword()
function generatePassword() {
  //Create/reset variable for prompt input check
  var lengthChecker = 0;
  //Check value entered by user is from 8 to 128
  while (lengthChecker > 128 || lengthChecker < 8) {
    passwordLength = prompt("Choose a password length from 8 to 128:");
    //Convert user input from string to numeric value
    var lengthChecker = Number(passwordLength);
    //Alert user incorrect value was entered
    if (lengthChecker > 128 || lengthChecker < 8) {
      alert("Invalid entry. Please enter a value from 8 to 128.");
      //Check that only a numeric value was entered and alert user
    } else if (isNaN(lengthChecker)) {
      alert("Invalid entry. Please enter a number from 8 to 128.");
      //Reset variable to remain in loop if numeric value isn't entered
      lengthChecker = 0;
    } else {
      continue;
    }
  }

  //Create/resets varibles for confirms to be used in while loop to check for at least one entry
  var specialChar = false;
  var upperCase = false;
  var lowerCase = false;
  var numberUse = false;

  //While loop used to verify at least one set of characters is selected
  while (
    specialChar === false &&
    upperCase === false &&
    lowerCase === false &&
    numberUse === false
  ) {
    //Confirms for each set of characters
    specialChar = confirm("Would you like special characters?");
    upperCase = confirm("Would you like upper case letters?");
    lowerCase = confirm("Would you like lower case letters?");
    numberUse = confirm("Would you like to use numbers?");
    //Alerts user is they haven't selected at least one set of characters
    if (
      specialChar === false &&
      upperCase === false &&
      lowerCase === false &&
      numberUse === false
    ) {
      alert("Select at least one set of characters.");
    }
  }
  //Create/reset all selected character array
  var combinedArray = [];

  //Series of if statements to add selected array to single combined array
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
  //Create an array with boolean of user's selected characters
  var userSelections = [specialChar, upperCase, lowerCase, numberUse];
  //Create/reset array to valid password characters to user selections
  var passwordVerification = [false, false, false, false];

  //Compare arrays as strings with .join method.  New passwords will continue to be created until user selections are satisfied.
  while (userSelections.join("") !== passwordVerification.join("")) {
    //Reset array for new password verification if needed
    passwordVerification = [false, false, false, false];
    //Create/reset variable for user password
    var userPassword = "";
    //For loop to add selected number of characters to password
    for (var i = 0; i < passwordLength; i++) {
      //Creates a random number based on number of characters in combined array
      indexLocation = Math.floor(Math.random() * combinedArray.length);
      //Create/reset variable for character at random location in combined array
      var tempValue = combinedArray[indexLocation];
      //Adds random character to password variable
      userPassword = userPassword + tempValue;
    }
    //Function to verify userPassword meets user selected requirements.  StringValue parameter inputs unique character string variables set above and indexValue is unique characters place in passwordVerification array
    function contentCheck(stringValue, indexValue) {
      //Loops through each character of userPassword
      for (var i = 0; i < userPassword.length; i++) {
        //Verifies one character at a time against unique character string variable to ensure there is at least one match
        if (stringValue.indexOf(userPassword[i]) !== -1) {
          //If match exists changes boolean value of characters position in passwordVerification array to "true"
          passwordVerification[indexValue] = true;
        } else {
          //If no match loop completes and starts from beginning, creating a new password and rechecking
          continue;
        }
      }
    }

    //Run function 4 times to verify each set of unique characters
    contentCheck(specialCharacters, 0);
    contentCheck(upperCaseCharacters, 1);
    contentCheck(lowerCaseCharacters, 2);
    contentCheck(numberCharacters, 3);
  }
  //Return generated password to be displayed in the text area
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
