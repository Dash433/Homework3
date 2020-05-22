// Assignment Code

 var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specials=["!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":",","];
var numbers=["1","2","3", "4", "5", "6", "7", "8", "9", "0"];
var password="";
function generatePassword(){
//big for loop
var sm=confirm("do you want a lower case letter");
 var lg=confirm("do you want an upper case letter");
 var num=confirm("do you want a number");
 var spc=confirm("do you want a special character");
 var lng=prompt("how long do you want your password must be between 8 122 characters");
if( lng<8||lng>122){
  alert(" must be between 8 and 122 refresh to try again")
}
else{
for( var i=0;i<lng;i++){
  
if(sm==true&&password.length<lng){
 password = letters[Math.floor(Math.random()*(26))].toLowerCase() + password;

}

if(lg==true&&password.length<lng){
  password = letters[Math.floor(Math.random()*(26))] + password;
 
 }
 

if(num==true&&password.length<lng){
  password = numbers[Math.floor(Math.random()*(10))] + password;
 
 }
 if(spc==true&&password.length<lng){
  password = specials[Math.floor(Math.random()*(17))] + password;

 }

 }alert("This is your password "+password);
}
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//gererates password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




