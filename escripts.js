//Declaracion de funcion
function sumar(num1,num2,){
      total = num1+num2
      //console.log(total);
      return total;
}

console.log(sumar(20,2));
//alert(sumar(20,2));
//sumar(20,2);

let restar = function(num1,num2){
    return num1-num2;
    //console.log(num1-num2);
}

console.log(40*restar(5,2));

let multi =function(num1,num2){
    return num1*num2;
}
console.log(multi(num2="2",num1=2));
        //Parametros => Cuerpo de la fun.
//let div = (num1,num2) => num1,num2;
//operadores ternarios
let div = (num1,num2) => num2 ==0 ?  "No se puede dividir entre cero" :num1/num2;


let paried =(num) => num % 2 == 0 ? "Es par": "Es impar";




//console.log(div(20,18)),
console.log(paried(7));

//alert(message="Hola Mundo");