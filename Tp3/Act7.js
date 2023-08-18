/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función 
y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */
let num;
const tablaMult = () => {
    num = prompt("Ingrese un numero")
    if(num === null || num === "" || isNaN(num)){
        alert("Ingreso un digito invalido")
    } else {
        for(i = 0; i < 11; i++){
            numMultiplicado = num * i
            console.log(`${num} x ${i} = ${numMultiplicado}`)
        }
    }
}
tablaMult()