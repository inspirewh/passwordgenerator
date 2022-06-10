// Assignment Code

//When the user click on the button 

const generateBtn = document.querySelector("#generate");



//ask the user how long will the password be? (below is a string therefore needs to be converted to a number value)
//can only accept numeric value
//number can only ben in an arrange from 8 - 128
//(incorrect scenario NAN, o , >8 or >128)
//re-ask the question if the user enters incorrect scenario

function askPasswordLength(){

  const passwordLength = Number (prompt("How long would you like the password to be? (Must be between 8 - 28)"));
  console.log(passwordLength)

  const passwordLengthisNan = isNaN(passwordLength);
  const userDidNotEnterAnything = passwordLength === 0
  const PasswordLengthOutsideOfRange = passwordLength < 8 || passwordLength > 128;

  if (passwordLengthisNan || userDidNotEnterAnything || PasswordLengthOutsideOfRange){
    return askPasswordLength();

  }
  return passwordLength
}



//do you want lowercase?
//do you wnat uppercase?
//do you want symbols
//do you want numbers

function passwordCriteria() {
  const lowercaseWanted = confirm("Would you like to include lowercase?")
  const uppercaseWanted = confirm("Would you like to include uppercase?")
  const symbolsWanted = confirm("Would you like to include symbols?")
  const numbersWanted = confirm("Would you like to include numbers?")

  //user needs to select atleast one of these requirements: 
  if (lowercaseWanted || uppercaseWanted || symbolsWanted || numbersWanted){
    // askCriteria: 

    return {
      lowercaseWanted,
      uppercaseWanted,
      symbolsWanted,
      numbersWanted,
    };
  }
   //(if one of these isn't selected - re-ask the question)
   return passwordCriteria();
}

// Add event listener to generate button
generateBtn.addEventListener('click', function(event){

  const passwordLength = askPasswordLength();
//criteria is an object containining the 4 criteria keys (lower,upper,symbols,numbers)
  const criteria = passwordCriteria();
  console.log(criteria);
  //initially character set is empty (if user selects one of the criteria - add it to the character set)
  

  //build a character set based on the criteria selected 
  
  let characterSet = "";
  //generate the randome password based on the character set
if (criteria.lowercaseWanted) {
  characterSet = characterSet + "abcde";
}

if (criteria.uppercaseWanted) {
  characterSet = characterSet + "ABCDE";
}

if (criteria.symbolsWanted) {
  characterSet = characterSet + "!@#%&^";
}

if (criteria.numbersWanted) {
  characterSet = characterSet + "1213513";
}

//as long as the index is less than my password length (input) specificed loop than...
//loop for password length times
let password = "";
for (let index = 0; index < passwordLength; index++) {
  //for each iteration we want to generate a random character (from a string) based on the character set
  //Math.floor() function returns the largest integer less than or equal to a given number.
const randomCharacter = characterSet[ Math.floor(Math.random() * characterSet.length)];

  //add this random character to password input (=+ shorthand for char set + char set + 12343654)
  password += randomCharacter;
  
}
console.log(password);
//show the generated password on the DOM (text area)
  document.getElementById('password').value = password;
});
