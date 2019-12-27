var numChar = ["0","1","2","3","4","5","6","7","8","9"];
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","W","Z"];
var specChar = [ "!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"]
//Test
//console.log(specChar)
var masterarray=[];

//Prompt for password criteria
// function userPasswordCriteria (){
//   var userLength = prompt("Please chose password length of 8 to 128 characters");
// }


//References element(this line of code was allready in JS file for assignment)
var generateBtn = document.querySelector("#generate");

//this will be creating specific password
function generatePassword(){
	//ask for length; 8-128 (prompt for length)
	 var userLength = prompt("Please chose password length of 8 to 128 characters");
	//validate length
	if(userLength < 8) {
		alert("Must be more than 8 characters");
		return;
	}
	if(userLength > 128) {
		alert("Must be less than 128 characters");
		return;
	}

	//ask for isnumchar (return true or false)
	var isnumchar = confirm("Do you want numbers in your pw?");
	//ask for isLowChar (return true or false)
	var isLowChar = confirm("Do you want lowercase in your pw?");
	//ask for isUpperCase (return true or false)
	var isUpperCase = confirm("Do you want uppercase in your pw?");
	//ask for isSpecChar (return true or false)
	var isSpecChar = confirm("Do you want special characters in your pw?");
	//validate at least one char chosen
	if (
		isnumchar === false &&
		isLowChar === false &&
		isUpperCase === false &&
		isSpecChar === false
	) {
		alert("Please chose a character type for your pw");
		return;
	}
	//each if cond is creating the masterarray
	if(isnumchar){
		masterarray.push(numChar)
	}
	if(isLowChar){
		masterarray.push(lowChar)
	}
	if(isUpperCase){
		masterarray.push(upperChar)
	}
	if(isSpecChar){
		masterarray.push(specChar)
	}
	console.log(masterarray)
	var temp;
	//run a forloop to pick out random values from the masterarray
	for(var i=0; i<userLength;i++){
		//temp =//masterarray[0]
		temp=(masterarray[Math.floor(Math.random() * (masterarray.length-1 - 0 + 1)) + 0]);
			//Math.floor(Math.random() * (userLength-1 - 0) + 0));
			//masterarray[0][0]
			console.log(temp[Math.floor(Math.random() * (temp.length-1 - 0 + 1)) + 0])
	}
	//return "test";
	//masterarray[0][Math.floor(Math.random() * (temp.length-1 - 0 + 1)) + 0]

}
//call generatePassword function
generatePassword();

// Write password to the #password input
function writePassword() {
	//create password by calling a fx generatePassword();
  var password = generatePassword();
  //this is a location for the password to show via frontend
  var passwordText = document.querySelector("#password");
  //stick your generated pw to frontend input area
  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
