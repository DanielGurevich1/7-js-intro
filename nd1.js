const age = 41
console.log(age);

const height = 173 
console.log(height);

const weight = 82 
console.log(weight);

const name = 'Daniel'
console.log(name);

const familyname = 'Gurevich'
console.log(familyname);

const birthplace = 'Vilnius'
console.log(birthplace);

const fnums = [1, 3, 5, 7, 9, 11];
console.log(fnums);

const lucky = [4, 6, 8, 0, 79, 99];
console.log(lucky);

const meals = ['beef', 'potatoes', 'tomatoes', 'onions']
console.log(meals);

const colors = ['red', 'green', 'blue', 'black']
console.log(colors);

const sum = 'age' + ', ' + 'height' + ', ' + 'weight';
console.log(sum);

const words = `${age} ${height} ${weight}`;
console.log(words);

let fnums1 = 4;

fnums1 = fnums1 + fnums[0];
fnums1 = fnums1 - fnums[1];
fnums1 = fnums1 + fnums[2];
fnums1 = fnums1 - fnums[3];
fnums1 = fnums1 + fnums[4];
fnums1 = fnums1 + fnums[5];
console.log(fnums1);

// kintamuju plaiginimas

const a = 21;
const b = 19;

if (a > b) {
console.log('red');
}
if (a < b) {
    console.log('black');
} 

const c = 20;
const d = 18;

if (c >= d) {
console.log('red');
}
if (c < d) {
    console.log('black');
} 

const accbal = 200;
const trasfer = 201;

if ( accbal > trasfer) {
    console.log('transfer confirmed')
} else {
    console.log('your account has not enough funds')
}
// what cities can you visit from 'a' city in Lithuania
console.log('---travel prog---')

const city = 'Vilnius';

if (city === 'Vilnius') {
    console.log('you can visit Trakai too')
} else { 
    console.log('check other options');    
}
console.log('---travel prog one ---');

const city1 = 'Kaunas';

if (city1 === 'Kaunas') {
    console.log('you can visit Rumsiskes too')
} else if (city1 != 'Kaunas') {
    console.log('you can visit Trakai too')
    } else if (city1 >= 'Kaunas') {
        console.log('you can visit Palanga too')
    } else {'you are not in Lithuania'};
        
    console.log('---text length ---');
   
const text = 'Suderve';
console.log(text);

console.log(text.length);

const text1 ='maisiagala';
const text2 ='karvys';

if (text.lenth > text1.length) {
    console.log(true);
} else if (text2.length < text1.length) {
    console.log('red light');
} else {console.log('Bingo!!!');}
        
console.log('isvesti saraso tipo kintamuju ilgius')
// 
console.log(meals);

let l = meals.length;

console.log(l);

console.log('ciklo for panaudojimas');
var array = [1, 2, 3, 4];
var sum1 = array.reduce(function(a, b){return a + b;
}, 0);
    console.log(sum1);

    console.log('Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):');

var sum2 = 0;
var number = 1;
while (number <= 50) {  
  sum2 = sum2 + number;        // -- body
  number++;             // -- updater
}
console.log('Sum is' + ' ' + sum2);

var sum3 = 0;
var number = 0;
while (number <= 4) {
    sum3 += number; number++;
}

console.log('b. atsakymas' + ' ' + sum3);

var sum4 = 0;
var number = 0;
while (number <= 100) {
    sum4 += number; number++;
}

console.log('c. atsakymas' + ' ' + sum4);

var sum5 = 0;
var number = 574;
while (number <= 815) {
    sum5 += number; number++;
}
console.log('d. atsakymas' + ' ' + sum5);

const x = 0;
const y = 6;

var sum6 = 0;
var number = [x];
while (number <= [y]) {
    sum6 += number; number++;
}
console.log('dinv. atsakymas' + ' ' + sum6);

var sum7 = 0;
var number = -50;
while (number <= -50) {
    sum7 += number; number++;
}
console.log('e. atsakymas' + ' ' + sum7);

var sum8 = 0;
var number = -70;
while (number <= -30) {
    sum8 += number; number++;
}
console.log('f. atsakymas' + ' ' + sum8);

console.log('panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo'
    ); 

    var word =["a", "b", 'c', 'd', 'e', 'f'];
    console.log(word.reverse());

   /*  console.log('---ciklo 3 pratymas---')
const i9 = 3;
var ats3 = 0;
var number = 0;
while (number <= 11)
for (i = 0; ats3 = number/i9, i <= number.length, i++;) {
    
}
console.log('i.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${i9} yra $[ats3] vienetai.') */


console.log('klaseje namu darbai')

const nuo = 0;
const iki = 100;

let sum9 = 0; 

for (let i=0; i <= iki; i++) {
    sum9 = sum9 + i;
    console.log(i, '=>', sum9);
}

console.log(`skaiciu intervale tarp ${nuo} ir ${iki} suma yra ${sum9}`);

let sum = 0;

if( nuo < iki) {
for (let i=0; i <= iki; i++) {
    sum9 = sum9 + i;
    console.log(i, '=>', sum9);}
} else { 
        for (let i= iki; i<= nuo; i++)
        sum = sum + i
}