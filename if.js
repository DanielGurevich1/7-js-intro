const accountBalance = 200;
const transfer = 200;

if (accountBalance < transfer) {
    console.log('banko zinute: saskaitoje truksta pinigu.');
}
if (accountBalance >= transfer) {
    console.log('banko zinute: Pavedimas padarytas.');
} else {console.log('banko zinute: saskaitoje truksta pinigu.');

}

/* if, 
<, >, >=, <=, ==, !=, ===, !==
naudotini: <, >, >=, <=, !=, ===, !==
nenaudotini: ==,  !==
draudziami: <!, !<, =>, =<
*/

/*
if () {}
if () {} else {} 
if () {} else if {} ... {} else if {}
 if () {} else if {} ... {} else if {} else {}
*/

const akys = 'zalios';

if (akys === 'melynos') {
    console.log('grazios sirdies zmogus');
    } else { 
        console.log('ne melynakis' );}
         
const akys1 = 'rudos';

if (akys1 === 'melynos') {
    console.log('grazios sirdies zmogus');
    } else if (akys1 === 'zalios') { 
        console.log('drasuoliai' );}
        else if (akys1 === 'raudonos') { 
            console.log('programuotojas' );
        }
            else {
                console.log("ar tu turi akis?")
            }
