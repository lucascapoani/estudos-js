/* Arrow function
Bind não funciona e não entende o This */

/*let dobro = function(x){
    return (2 * x);
}*/

let dobro = x => 2 * x;

console.log(dobro(8));