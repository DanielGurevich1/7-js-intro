function pickletters (text, step) {
    // input validation
    if (typeof text !== 'string') {
        return 'Error: pirmoji reiksme ne teksto tipo.';
    }
    if (typeof step !== 'number') {
        return 'Error: antroji reiksme ne skaiciaus tipo.';
    }
    if (typeof text === '') {
        return 'error: string cannot be empty.';
    }
    if ( step % 1 !== 0 ) {
        return 'error: zingsnis turi buti sveikas skaicius.';
    }
    if (step === 0) {
        return 'error: zingsnis negali buti nulinis.'
    }
    // logic
    const size = text.length;
    let rez ='';
    for (let i = step - 1;  i < size; i += step) {
    // if (i % step === step - 1) {
        console.log(text[i]);
        rez = rez + text[i];
    }
        

    // post logic validation

    // return
    return rez;
}

console.log(pickletters('abcdefg', 2), '->', 'bdf');
console.log(pickletters('abcdefghijkl', 3), '->', 'cfil');
console.log(pickletters('abc', 0));
console.log(pickletters('abc', 4));
console.log(pickletters(1561, 2));
console.log(pickletters(1, 'abcdefg'));
console.log(pickletters('abcdefg', 2));
