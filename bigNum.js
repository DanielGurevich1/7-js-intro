function bigNum(list) {
    // inp validation
    if (typeof list !== 'object') {
        return 'netinkamas skaicius';
    }
    if (list.length === 0)  {
        return 'sarasas yra tuscias.'
    }
    const size = list.length;

    // logic
    let biggestNumber = -Infinity;
    for (let i = 0; i < size; i++) {
    const num = list[i];

    // saraso elemnto validacija

    if (typeof num !== 'number') {
    continue; 
    }

        // logika 

        if (num > biggestNumber) {
            biggestNumber = num;
        }

        // post logic validation 

        if (biggestNumber === -Infinity) {
            return 'sarase nerastas nei vienas normalus skaicius';
        }
    // return 

    return biggestNumber;

    }

//console.log(bigNum([1, 2, 4, 5]), '->', 5);
//console.log(bigNum([]), '->', 0);
//console.log(bigNum('tuscias')); 
console.log(bigNum('pomidoras'));
console.log(bigNum(585));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum([]));
console.log(bigNum([-Infinity, NaN, true, false, [], [8], [5, -9], 'ads', undefined]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([77]), '->', 77);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([1, 2, 3, 2, 1]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-1, -2, -3, -4, 79, -6, -7, -8]), '->', 79);

console.log(bigNum([1, 2, 3, 2, 1, 'labas']), '->', 3);
console.log(bigNum([1, 2, 3, 'labas', 2, 1]), '->', 3);
console.log(bigNum(['labas', 1, 2, 3, 2, 1]), '->', 3);

console.log(bigNum(['labas', 'labas', 'labas', 'labas', -99999999999999]), '->', -99999999999999);
console.log(bigNum(['labas', 'labas', -99999999999999, 'labas', 'labas']), '->', -99999999999999);
console.log(bigNum([-99999999999999, 'labas', 'labas', 'labas', 'labas']), '->', -99999999999999);

console.log(bigNum([1, 2, 3, 2, 1, NaN]), '->', 3);
console.log(bigNum([1, 2, NaN, 3, 2, 1]), '->', 3);
console.log(bigNum([NaN, 1, 2, 3, 2, 1]), '->', 3);