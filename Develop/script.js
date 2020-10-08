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
numberCheck = numbersArray.join("");
upperCheck = upperCaseArray.join("");
specialCharCheck = specialCharArray.join("");
lowerCheck = lowerCaseArray.join("");

//return value for password variable in writePassword()
function generatePassword() {
  //Global variables for user inputs
  var combinedArray = [];
  var lengthChecker = 0;
  while (lengthChecker > 128 || lengthChecker < 8) {
    passwordLength = prompt("Choose length between 8 to 128");
    var lengthChecker = Number(passwordLength);

    if (isNaN(lengthChecker)) {
      lengthChecker = 0;
    }
  }
  var specialChar = false;
  var upperCase = false;
  var lowerCase = false;
  var numberUse = false;

  while (
    specialChar === false &&
    upperCase === false &&
    lowerCase === false &&
    numberUse === false
  ) {
    specialChar = confirm("Would you like special characters?");
    upperCase = confirm("Would you like upper case letters?");
    lowerCase = confirm("Would you like lower case letters?");
    numberUse = confirm("Would you like to use numbers?");
    if (
      specialChar === false &&
      upperCase === false &&
      lowerCase === false &&
      numberUse === false
    ) {
      alert("Select at least one set of characters.");
    }
  }

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
  var userSelections = [specialChar, upperCase, lowerCase, numberUse];
  var passwordVerification = [false, false, false, false];

  while (userSelections.join("") !== passwordVerification.join("")) {
    passwordVerification = [false, false, false, false];
    var userPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      indexLocation = Math.floor(Math.random() * combinedArray.length);
      tempValue = String(combinedArray[indexLocation]);
      userPassword = userPassword + tempValue;
    }

    function contentCheck(stringValue, indexValue) {
      for (var i = 0; i < userPassword.length; i++) {
        if (stringValue.indexOf(userPassword[i]) !== -1) {
          passwordVerification[indexValue] = true;
        } else {
          continue;
        }
      }
    }

    contentCheck(specialCharCheck, 0);
    contentCheck(upperCheck, 1);
    contentCheck(lowerCheck, 2);
    contentCheck(numberCheck, 3);
  }
  return userPassword;
}

// alert(userPassword);
// console.log(numberusestring);
// console.log(numbersArray[9]);

// alert(userPassword);
// var verifyPassword = true;
// while (verifyPassword) {
//   alert("In the while loop");
// for (var i = 0; i < userPassword.length; i++) {
//   if (numberusestring.indexOf(userPassword[i]) !== -1) {
//     alert(numberusestring.indexOf(userPassword[i]));
//     alert(i);
//     return userPassword;
//   } else {
//     continue;
//   }
// }

//     alert("In the for loop");

//     if (userPassword[i] === String(numbersArray[0])) {
//       alert("IN the If");

//       verifyPassword = false;
//       break;
//     } else {
//       continue;
//     }
//   }
//   break;
// }
// return "Maybe";
// alert(userPassword);
// console.log(numbersArray);
// console.log(userPassword.includes(numbersArray));
// if (numberUse) {
//   return userPassword;
// } else {
//   //   while(userPassword.includes(numbersArray)){
//   //     passwordReset();
//   // }
//   return "hello";
// }

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
