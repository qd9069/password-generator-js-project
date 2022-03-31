// Assignment Code
var generateBtn = document.querySelector("#generate");


// Declares variables for password length, lowercase, uppercase, numeric, special characters
// var length - from prompt
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


// lowercase.concat(uppercase,numeric,specialCharacters);
// console.log (combineall);





function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here

  // 1- prompt for password length
  var inputLength = window.prompt("How many characters would you like your password to contain?");

  // 2- check if inputLength is valid, if not valid then stop. If valid continue.
  if (inputLength < 8 || inputLength > 128) {
    window.alert("The number of characters cannot be less than 8 and no more than 128, please enter it again.");
  } else {
    var combineall = [];

    // 3- prompt question: to include special characters
    var includeSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
    if (includeSpecialCharacters) { 
      combineall = specialCharacters;
    }

    // 4- prompt question: to include numeric characters
    var includeNumeric = window.confirm("Click OK to confirm including numeric characters.");
    if (includeNumeric) {
      combineall = combineall.concat(numeric);
    }

    // 5- prompt question: to include uppercase characters
    var includeUppercase = window.confirm("Click OK to confirm including uppercase characters.");
    if (includeUppercase) {
      combineall = combineall.concat(uppercase);
    }

    // 6- prompt question: to include lowercase characters
    var includeLowercase = window.confirm("Click OK to confirm including lowercase characters.");
    if (includeLowercase) {
      combineall = combineall.concat(lowercase);
    }

    // console.log (combineall);

    if (!includeSpecialCharacters && !includeNumeric && !includeUppercase && !includeLowercase) {
      window.alert("At least one of the character types should be selected, please enter it again.");
    } else {
      var generatedPassword = "";
       // 7- generate password
       for (var i = 0; i < inputLength; i++) {
        generatedPassword = generatedPassword + combineall [Math.floor(Math.random() * combineall.length)];
       }

       password = generatedPassword;
    }

  }

 



  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// 2) generate pw all "a"'s for the desired length
// "aaaaaaa"
// password = "";

// for (var i=0; i < inputlength; i++) {
// password = password + "a"

// }

// 3) display all random lowercase letters for the chose length

// var lowercase = window.confirm("Click OK to confirm including lowercase characters.");

// 4) display all random uppercase/lowercase letters
// 5) let user choose to include uppercase and/or lowercase
// 6) let user choose upper, lower, and/or numbers
// 7) let user choose upper, lower, numbers, and/or specials
// 8) prevent user from too short
// 9) prevent user from too short or too long

// 10) prevent user from choosing no character types