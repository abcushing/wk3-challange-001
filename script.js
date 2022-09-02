// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    let passwordLength = prompt("please enter length");

    var passwordLower = confirm("include lowercase");
    var passwordUpper = confirm("include upper");
    var passwordNumeric = confirm("include numeric");
    var passwordSpecial = confirm("include Special caracters");

    console.log(passwordLower, passwordUpper, passwordNumeric, passwordSpecial, passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        alert("you did it wrong!!");
        return;
    }

    if (!passwordLower && !passwordUpper && !passwordNumeric && !passwordSpecial) {
        alert("you did it wrong!!");
        return;
    };

    var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var arrayNumeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    var arraySpecial = ["!", "@", "$", "%"]
    var userChoice = []
    var finalPassword = []


    if (passwordLower == true) {
        userChoice = userChoice.concat(arrayLower)
    }

    if (passwordUpper == true) {
        userChoice = userChoice.concat(arrayUpper)
    }

    if (passwordNumeric == true) {
        userChoice = userChoice.concat(arrayNumeric)
    }

    if (passwordSpecial == true) {
        userChoice = userChoice.concat(arraySpecial)
    };
    for (var i = 0; i < passwordLength; i++) {
        var randIndex = Math.floor(Math.random() * userChoice.length);
        var randElement = userChoice[randIndex];
        finalPassword.push(randElement)
    }
    //  var passwordGenerate = shuffle(userChoice)
    console.log(finalPassword)
    var actualFinal = finalPassword.join("")
    console.log(actualFinal)


    document.querySelector("#password").textContent = actualFinal;
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    //var generateBtn()
    //   generateBtn.generatePassword()
    //   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page