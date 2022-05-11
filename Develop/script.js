// Assignment Code
const generateBtn = document.querySelector("#generate");

//generates random password
function generatePassword() {
  // user input for password length
  const passwordLength = prompt("Please enter a password length of at least 8 characters and no more than 128 characters.");
  // checks if password meets length criteria
  if (passwordLength < 8 || passwordLength > 128){
    alert("Please enter a valid password length. Valid password lengths are greater than 8 characters and less than 128 characters.");
    generatePassword();
  }

  // user input for character types
  const isCharactersLowercase = confirm("Include lowercase characters?");
  const isCharactersUppercase = confirm("Include uppercase characters?");
  const isCharactersNumeric = confirm("Include numeric characters?");
  const isCharactersSpecial = confirm("Include special characters?");
  // checks if at least one character type is selected
  if (!isCharactersLowercase && !isCharactersUppercase && !isCharactersNumeric && !isCharactersSpecial){
    alert("Please select at least one character type.");
    generatePassword();
  }

  // password generator using if and for loops here
  const password = "";
  

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
