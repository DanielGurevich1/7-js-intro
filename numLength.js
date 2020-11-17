function numLength(num) {
// input validation
if (typeof num !== 'number') {
    return 'pateikta netinkamo tipo reiksme'
}
if ('' + num === 'NaN') {
    return 'pateikta netinkamo tipo reiksme'}

    if (num < 0){
        return 'radau minusa'
    }

    
// logic
const textNum = '' + num;
const size = textNum.length;

// return
return size;
}

console.log(numLength(5));	
console.log(numLength(781));
console.log(numLength(37060123456));
console.log(numLength(3,14));
console.log(numLength(-37060123456));
console.log(numLength(true ));

console.log(numLength('asd'));

console.log(numLength(NaN));

