// Assignment code here: add variables and conditions for passwords.
var passwordLength = prompt("Length: Enter the desired number of characters between 8-128");
var symbols = prompt("Do you want to include special characters; yes or no?");
var uppercase = prompt("Do you want to use uppercase characters; yes or no?");
var lowercase = prompt("Do you want to use lowercase characters; yes or no?");
var numeric = prompt("Would you like to include numbers; yes or no?");
var password ="";
var password=document.getElementById("password");

 function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function generatePassword() { 
   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password; 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var randomNumber = document.querySelector("#password");
var passwordText = document.querySelector("password");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("Generated Password");

  passwordText.value ="password";

}

// Add event listener to generate button
generate.addEventListener("click", writePassword);
console.log(writePassword)
