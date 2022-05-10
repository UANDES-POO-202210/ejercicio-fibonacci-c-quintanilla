var num = require('fs');
var num_m = num.readFileSync('numero.txt', 'utf8');
let num_f = num_m.toString();

var lista=[0,1];
var fn0 = 0;
var fn1 = 1;
var res=0;


for (var c=1 ; c < num_f;){
    res= fn0 + fn1;
    fn0=fn1;
    fn1=res
        c++;

}

console.log("El resultado de la serie de fibonaci para el numero es:");
console.log(res);


