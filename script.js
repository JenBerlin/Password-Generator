var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var generateBtn = document.querySelector("#generate");

function generatePassword () {

 var prompt1 = parseInt(prompt ("Please choose a LENGTH of at least 8 characters and not more than 128 characters: "));
    console.log("User entered: "+ prompt1);
  
   if(prompt1 < 8) {
      alert(
       "Invalid input - Too short - Press OK to enter again!");
      }
    
    if(prompt1 > 128) {
      alert(
       "Invalid input - Too long - Press OK to enter again!");
      }
    
    if(Number.isNaN (prompt1)){
      alert(
      "Invalid input - not a number - Press OK to enter again!");
      }

    var lowCase = confirm ("You want to include LOWCASE character?\nIf YES please press OK; If NO please press CANCEL!");

    var upperCase = confirm ("You want to include UPPERCASE character?\nIf YES please press OK; If NO please press CANCEL!");

    var specials = confirm ("You want to include SPECIALCHARACTERS character?\nIf YES please press OK; If NO please press CANCEL!");

    var number = confirm ("You want to include NUMBER character?\nIf YES please press OK; If NO please press CANCEL!");

    if (lowCase === false && upperCase === false && specials === false && number === false) {
      alert(
      "Invalid input - please choose at least one of it!");
      }

    var passwordArray = []

    var possibleCharacters = []

    var mustHaves = []
      console.log(possibleCharacters)

    if (lowCase) {
      possibleCharacters = possibleCharacters.concat (lowerCasedCharacters);

      var index = Math.floor(Math.random() * lowerCasedCharacters.length)
      mustHaves.push(lowerCasedCharacters[index])
    }

    if (upperCase) {
      possibleCharacters = possibleCharacters.concat (upperCasedCharacters);

      var index = Math.floor(Math.random() * upperCasedCharacters.length)
      mustHaves.push(upperCasedCharacters[index])
    }

    if (specials) {
      possibleCharacters = possibleCharacters.concat (specialCharacters);

      var index = Math.floor(Math.random() * specialCharacters.length)
      mustHaves.push(specialCharacters[index])
    }

    if (number) {
      possibleCharacters = possibleCharacters.concat (numericCharacters);

      var index = Math.floor(Math.random() * numericCharacters.length)
      mustHaves.push(numericCharacters[index])
  }

  for (var i = 0; i < prompt1; i++) {
    var index = Math.floor(Math.random() * possibleCharacters.length)
    passwordArray.push(possibleCharacters[index])
  } 
  for (var i = 0; i < mustHaves.length; i++) {
    passwordArray[i] = mustHaves[i]
  }
    return passwordArray.join("")
}

function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
