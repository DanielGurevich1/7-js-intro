function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

function multiply(a, b) {
    // input validation
    if (typeof a !== 'number') {
console.log('error: pirmoji reiksme yra ne ..')
    }

    if (typeof b !== 'number') {
        console.log('error: antroji reiksme yra ne ..')
    }
// function logic
const rez = a * b;

// function rezult
    return rez;
}

console.log(multiply(2, 2));
console.log(multiply(2, 5));
console.log(multiply(-2, 11));
console.log(multiply(2, 2));
console.log(multiply(2, blur));