function bigNum(list) {
 // inp validation
if (typeof list !== 'object') {
    return 'netinkamas skaicius'
}
if (list.length === 0)  {
    return 'sarasas yra tuscias'
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
    return 'sarase nerastas neii vienas normalus skaicius';
}
 // return 

 return 0;

}

console.log(bigNum([1, 2, 4, 5]), '->', 5);
console.log(bigNum([]), '->', 0);
console.log(bigNum('tuscias')); 
