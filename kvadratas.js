// kelimas kvadratu

// 2 -> 4

/* function kvadratu(num) {
  const rez = num * num; 

  console.log(num, '->', rez);

  return rez;
}
const duKv = kvadratu(2);
const trysKv = kvadratu(3);
console.log(duKv);
console.log(trysKv);
console.log(kvadratu(-4));
console.log(kvadratu(-5)); */

function laipsnis(base, power){
    let rez = 1;
    // turime skaiciu 
    // dauginame skaiciu is saves n kartu, n yra laipsnis
    // isvedame rezultata i console
     // return base ** power;
     // return math.pow(base, power)
 for (let i=0; i < power; i++){
        rez = rez * base;
     }
     return rez;
 }
const kubas2 = laipsnis(2, 3);
 console.log(du10, '->', 1024);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024); 