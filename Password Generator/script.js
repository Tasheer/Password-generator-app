const passEl = document.getElementById('pass');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+'

function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowerCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePass() {

    const len = lengthEl.value;
    let password = '';

    if(upperEl.checked) {
        password += getUpperCase();
    }

    if(lowerEl.checked) {
        password += getLowerCase();
    }

    if(numberEl.checked) {
        password += getNumbers();
    }

    if(symbolEl.checked) {
        password += getSymbols();
    }

    for( let i=password.length; i<len; i++ ) {
        const x = generateX();
        // ??
        password += x;
    }

    passEl.innerText = password;
}

function generateX() {
    const xs = [];

    if(upperEl.checked) {
        xs.push(getUpperCase())
    }

    if(lowerEl.checked) {
        xs.push(getLowerCase())
    }

    if(numberEl.checked) {
        xs.push(getNumbers())
    }

    if(symbolEl.checked) {
        xs.push(getSymbols())
    }

    if(xs.length === 0)
    return "";
    // what's the use of this
    return xs[Math.floor(Math.random() * xs.length)]

}

generateEl.addEventListener('click', generatePass);


// ?????????
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passEl.innerText;
// !password ?
    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
