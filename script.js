// Assignment Code
var sm=confirm("do you want a lower case letter");
 var lg=confirm("do you want an upper case letter");
 var num=confirm("do you want a number");
 var spc=confirm("do you want a special character");
 var lng=prompt("how long do you want your password must be between 8 122 characters");
 var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specials=["!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":",","];
var numbers=["1","2","3", "4", "5", "6", "7", "8", "9", "0"];
var password="";
//big for loop

for( var i=0;i<lng;i++){
  
if(sm){
 password = letters[Math.floor(Math.random()*(26))].toLowerCase() + password;

}
if(password.length==lng){break;}
if(lg){
  password = letters[Math.floor(Math.random()*(26))] + password;
 
 }
 if(password.length==lng){break;}

if(num){
  password = numbers[Math.floor(Math.random()*(10))] + password;
 
 }
 if(password.length==lng){break;}
 if(spc){
  password = specials[Math.floor(Math.random()*(17))] + password;

 }
 if(password.length==lng){break;}

 }alert(password);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
