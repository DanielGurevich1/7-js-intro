const word1 = 'jonathan';

function reverse(word1) {
    let reversed = '';
    for (var i = word1.length -1; i >= 0; i--) {
        reversed += word1[i];
    }
    return reversed;