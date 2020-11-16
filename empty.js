function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

function multiply(a, b) {
    if (typeof a !== 'number') {
console.log('error: pirmoji reiksme yra ne ..')
    }

    if (typeof b !== 'number') {
        console.log('error: antroji reiksme yra ne ..')
    }
    return a * b;
}

console.log(multiply(2, 2));
console.log(multiply(2, 5));
console.log(multiply(-2, 11));
console.log(multiply(2, 2));
console.log(multiply(2, blur));