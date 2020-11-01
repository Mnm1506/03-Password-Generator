// Assignment Code :
var generateBtn = document.querySelector("#generate");

// Write password to the #password input :
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button :
generateBtn.addEventListener("click", writePassword);

// Setting Variables :
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// variable's Values :
  // Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  // Numbers 
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Letters
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // For the Uppercase conversion
space = [];
var choices;

// Letters conversion to uppercase :
var toUpper = function (x){
  return x.toUpperCase()
};
alpha2 = letter.map(toUpper);


// Start function to generate password :
function generatePassword() {
  // Asks for user input :
  enter = parseInt(prompt("How many characters will your password contain? Choose between 8 and 128."));
  
  // First if statement for user validation :
  if (!enter) {
      alert("This needs a value");
      // Validates user input :
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("Please pick a number between 8 and 128"));
      // Asks user for password criteria :
  } else {
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

// 4 negative options :
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose at least one criteria!");

}

// 4 positive options :
else if (confirmNumber && confirmCharacter  && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, letter, alpha2);
}
// 3 positive options :
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alpha2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, letter);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(letter, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(letter, alpha2);
}
// 2 positive options :
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
  choices = letter.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = letter.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
// 1 positive option :
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = letter;
}
// uppercase conversion :
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};

// passwordArr variable is an array placeholder :
var passwordArr = [];

// Random selection for all variables: 
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  passwordArr.push(pickChoices);
};
// joins the password array and converts it to a string :
var joinP = passwordArr.join("");
UserInput(joinP);
return joinP;
};
// Displays the password value using textcontent :
function UserInput(joinP) {
document.getElementById("password").textContent = joinP;
};