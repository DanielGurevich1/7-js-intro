// a.	0 - 11
// b.	8 - 31
// c.	-18 - 18

const nuo = 0;
const iki  = 11; 

const dalyklis = 3; 

let kiekis = 0;

// % - matematinis operatotirus - dalybos liekana

for (let i = nuo; i < iki; i++){
    if (i % dalyklis === 0) {
        kiekis++;
    }
    
}




console.log(`i.	Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${dalyklis} yra ${kiekis} vienetai`)
