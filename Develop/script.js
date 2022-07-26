// Assignment Code
var generateBtn = document.querySelector("#generate");

var keyUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var keyLower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789"
var symbol = "!@#$%^&*()"


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  var keySet = "";

// Prompt Questions
  var isUppercase = window.confirm("Do you want an uppercase?");
  var isLowercase = window.confirm("Do you want a lowercase?");
  var isNumber = window.confirm("Do you want a numeric value?");
  var isSymbol = window.confirm("Do you want special characters?");
  var pwLength = window.prompt("Choose between 8-128 characters in your password");
  var length = parseInt(pwLength);

// Logic for user decision, and combining decisions

if (isUppercase) {
    keySet += keyUpper;
  };

  if (isLowercase) {
    keySet += keyLower;
  };

  if (isNumber) {
    keySet += number;
  };

  if (isSymbol) {
    keySet += symbol;
  };
  console.log(keySet);


// Logic for length password answer
var password = "";

for (var i = 0; i < length; i++) {
  var index = Math.floor(Math.random() * keySet.length);
  password += keySet[index];
};


  passwordText.value = password;


// var password = generatePassword(); (NOT NEEDED i dont think)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

