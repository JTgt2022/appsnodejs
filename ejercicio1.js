/*const num1= 6;
const num2= 10;


let suma=num1+num2

console.log (`La suma entre ${num1} y ${num2} es ${suma}`);*/

//funcion suma
const sumar=(num1,num2)=>
{
    let suma=num1+num2

    console.log (`La suma entre ${num1} y ${num2} es ${suma}`);
}



//funcion restar
function restar(num1,num2){

    let resta=num1-num2;
    
    console.log (`La resta entre ${num1} y ${num2} es ${resta}`);

}

//funcion multiplicar
function multiplicar(num1,num2){

    let multiplicaciones=num1*num2;
    
    console.log (`La multiplicacion entre ${num1} y ${num2} es ${multiplicaciones}`);

}


//funcion dividir
function dividir(num1,num2){

    let division=num1/num2;
    
    console.log (`La division entre ${num1} y ${num2} es ${division}`);

}


//funcion potencia 
function potencia(num1,num2){

    let potenciar=num1 ** num2;
    
    console.log (`El numero ${num1} a la potencia ${num2} es ${potenciar}`);

}

//funcion radicacion 
function rdicacion(num1,num2){

    let radicar=num1 ** num2;
    
    console.log (`El numero ${num1} a la potencia ${num2} es ${potenciar}`);

}

//funcion radicacion 
function radicacion(num1){

    
    console.log (Math.sqrt(num1));

}

//funcion radicacion 
function radicaciones(num1){

    let radicar=(Math.sqrt(num1))
    console.log (`La Raiz cuadrada de ${num1} es ${radicar}`);

}








/*exports.suma=sumar;
exports.restas=restar;
exports.multipli=multiplicar;
exports.divisiones=dividir;
exports.poten=potencia;
exports.radi=radicacion;
exports.rad=radicaciones;*/


//module exports

const operaciones={}
operaciones.suma=sumar;
operaciones.restas=restar;
operaciones.multipli=multiplicar;
operaciones.divisiones=dividir;
operaciones.poten=potencia;
operaciones.rad=radicaciones;

module.exports=operaciones;




