const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Mapping of password generation functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// for clipboard button
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if (!password) {
        return;
    }

  // for copy generated password to clipboard
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!')
})


// Event listener for generate button
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;  // Get password length from input
    const hasLower = lowercaseEl.checked; // check if lowercase letters are selected
    const hasUpper = uppercaseEl.checked; // check if uppercase letters are selected
    const hasNumber = numbersEl.checked; // check if numbers are selected
    const hasSymbol = symbolsEl.checked; // check if symbols are selected

    // Generate password and display it in the result 
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})


// generate password based on user selected criteria
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]); // Create an  array of user selected criteria
    
    // If user doesn't select any criteria then return empty string
    if(typesCount === 0) {
        return '';
    }

    // Generate the password by user selecting characters from different criteria
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length) ;// Trim the generated password lenght to user desired/criteria length

    return finalPassword;
}



// Functions to generate random characters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}