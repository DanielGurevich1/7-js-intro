const pirmas1 = 2;
const antras1 = 2; 
const suma1 = pirmas1 + antras1;
console.log(`${pirmas1} + ${antras1} = ${suma1}`);

function sumavimas(pirmas, antras) {
    const suma = pirmas + antras;
    console.log(`${pirmas} + ${antras} = ${suma}`)
}
sumavimas(2, 5)
sumavimas(8, 9)
sumavimas(1, 3, 5)

function pazymiuvidurkis(list) {
const suma = 0; 
const kiekis = list.length;
for (let i= 0; i < kiekis; i++) {
    const pazimys = list[i];
    suma = suma + pazimys;
}
const vidurkis = suma / kiekis

if (kiekis === 0) {
    console.log('neturi pazymiu')
} else {
    console.log(`vidurkis: ${vidurkis}.`)
    }
}

pazymiuvidurkis([5, 7, 9, 10]);
pazymiuvidurkis([5, 7, 12, 10]);
pazymiuvidurkis([5, 7, 13, 10]);
pazymiuvidurkis([5, 7, 9, 10]);
