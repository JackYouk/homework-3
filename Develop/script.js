// Assignment Code
const generateBtn = document.querySelector("#generate");

//array of letters
const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// generates random Uppercase character
function genUp(){

}

// generates random Lowercase character
function genLow(){

}

// generates random Numeric character
function genNum(){
  let num = Math.random()*10;
  num = Math.round(num);

  return num;
}

// array of special characters
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

// generates random special character
function genSpec(){
  let spec = specialArray[0];

  return spec;
}

// generates random password
function generatePassword() {
  // user input for password length
  let passwordLength = prompt("Please enter a password length of at least 8 characters and no more than 128 characters.");
  // checks if password meets length criteria
  if (passwordLength < 8 || passwordLength > 128){
    alert("Please enter a valid password length. Valid password lengths are greater than 8 characters and less than 128 characters.");
    generatePassword();
  }

  // user input for character types
  let isCharactersLowercase = confirm("Include lowercase characters?");
  let isCharactersUppercase = confirm("Include uppercase characters?");
  let isCharactersNumeric = confirm("Include numeric characters?");
  let isCharactersSpecial = confirm("Include special characters? (!, @, #, $, %, ^, &, *)");
  // checks if at least one character type is selected
  if (!isCharactersLowercase && !isCharactersUppercase && !isCharactersNumeric && !isCharactersSpecial){
    alert("Please select at least one character type.");
    generatePassword();
  }

  // password generator using if and for loops here
  let password = "";
  

  // returns generated password
  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
