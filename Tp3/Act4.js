/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
 */

function esParOImpar(numero) {
    if (numero === parseInt(numero)){
        if (numero === null || numero === ""){
        return "invalido";
        
    } else {
        if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
    }
    } else {
        return "invalido"
    }
    
    }
    
    let numeroEjemplo = parseInt(prompt("Ingrese un numero"));

    while (esParOImpar(numeroEjemplo) === "invalido") {
      alert("Esto es invalido pue.");
      numeroEjemplo = parseInt(prompt("Dale ingresa un numero valido, no te hagas el tonto"));
    }

    const resultado = esParOImpar(numeroEjemplo);

    document.write(`<h1>El número ${numeroEjemplo} es ${resultado}.</h1>`);
    alert("Bien ahi rey")