// Assignment Code
const generateBtn = document.querySelector("#generate");

//array of letters
const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// generates random Uppercase character
function genUp(){
  let i = Math.random()*100;
  i = Math.floor(i);
  while(i > 25){
    i = Math.random()*100;
    i = Math.floor(i);
  }
  let letter = letterArray[i].toUpperCase();

  return letter;
}
console.log(genUp());

// generates random Lowercase character
function genLow(){
  let i = Math.random()*100;
  i = Math.floor(i);
  while(i > 25){
    i = Math.random()*100;
    i = Math.floor(i);
  }
  let letter = letterArray[i];

  return letter;
}
console.log(genLow());

// generates random Numeric character
function genNum(){
  let num = Math.random()*10;
  num = Math.floor(num);

  return num;
}
console.log(genNum());

// array of special characters
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

// generates random special character
function genSpec(){
  let i = genNum();
  while(i > 7){
    i = genNum();
  }
  let spec = specialArray[i];

  return spec;
}
console.log(genSpec());

// generates random password
function generatePassword() {
  // user input for password length
  let passwordLength = prompt("Please enter a password length of at least 8 characters and no more than 128 characters.");
  // checks if password meets length criteria
  while (passwordLength < 8 || passwordLength > 128){
    alert("Please enter a valid password length. Valid password lengths are greater than 8 characters and less than 128 characters.");
    passwordLength = prompt("Please enter a password length of at least 8 characters and no more than 128 characters.");
  }

  // user input for character types
  let isCharactersLowercase = confirm("Include lowercase characters?");
  let isCharactersUppercase = confirm("Include uppercase characters?");
  let isCharactersNumeric = confirm("Include numeric characters?");
  let isCharactersSpecial = confirm("Include special characters? (!, @, #, $, %, ^, &, *)");
  // checks if at least one character type is selected
  while (!isCharactersLowercase && !isCharactersUppercase && !isCharactersNumeric && !isCharactersSpecial){
    alert("Please select at least one character type.");
    isCharactersLowercase = confirm("Include lowercase characters?");
    isCharactersUppercase = confirm("Include uppercase characters?");
    isCharactersNumeric = confirm("Include numeric characters?");
    isCharactersSpecial = confirm("Include special characters? (!, @, #, $, %, ^, &, *)");
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
