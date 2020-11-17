function numLength(num) {
// input validation
if (typeof num !== 'number') {
    return 'pateikta netinkamo tipo reiksme';
}
if ('' + num === 'NaN') {
    return 'pateikta netinkamo tipo reiksme'}

    if ('' + num === Infinity) {
        return 'pateikta netinkamo tipo reiksme.';
    }

// logic

const textNum = '' + num;
let size = textNum.length;

 if (num < 0) {
        size--;
    }
    if (num % 1 !== 0) {
        size--;
    }
// return
return size;
}

console.log(numLength(5));	
console.log(numLength(781));
console.log(numLength(37060123456.1));
console.log(numLength(3,14));
console.log(numLength(-37060123456));
console.log(numLength(true ));

console.log(numLength('asd'));

console.log(numLength(NaN));

