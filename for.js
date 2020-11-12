const kiek = 7;

for (let i=3; i < kiek; i++) {
    // logika
    console.log('labas rytas!', i);
}

 let number = 17;
 console.log(number);

 console.log(number--);

 /*jei kas menesi uzdirba 5000 per men., kiek bus per MediaKeyStatusMap.*/
 console.log('----------')

 

 const alga = 5000;
 const menesiu = 24;


 for (let i=1; i <= menesiu; i++) {
     pajamos = i * alga;
    console.log(`${i}) ${pajamos} pinigu.`);
}

console.log('----------')

/* parasyti skaicius nuo 8 iki 4*/

for ( let i=8; i >= 4; i--) {
    console.log(i);
}

console.log('----------')

/* isvardyti ciferblato skaicius nuo duotos valandos iki galo*/

const valanda = 1;
const maxValandu = 12;

for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + ' val');
}

console.log('----------')

/*duotas miestu sarasas. isvardinti kiekviena aplankyta */

const miestai = [ 'Vilnius', 'Kaunas', 'Klaipeda', 'Riga', 'Tallinn']

for (let i = 0; i < miestai.length; i++) {
   console.log(`Aplankaiu: ${miestai[i]}`)
    
}