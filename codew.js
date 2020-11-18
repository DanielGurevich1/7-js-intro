function litres(time) {
    // input validation
      if (typeof (time) !== 'number') {
        return 'Error: given time integer is not a number.';
      }
      if (typeof (time) <= 0) {
        return 'Error: time cannot be 0 or negative.';
      }
      if (num % 1 !== 0) {
        return 'error: 0 liters'
      }
    
    // logic 
   
    return Math.floor(time*0.5);
}
const time = 4;
const rez = Math.floor(time*0.5);
console.log(rez);