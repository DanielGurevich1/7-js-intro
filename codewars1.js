var first = [ 1, 2, 3, 4, 5 ];
var second = [ 4, 5, 6 ];
 
var difference = second.filter(x => first.indexOf(x) === -1);
console.log(difference);