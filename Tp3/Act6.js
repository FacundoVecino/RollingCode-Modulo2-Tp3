/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
 */

let LadoA, LadoB, inputA, inputB, perimetro;
const calcPerimetro = () => {
    inputA = prompt("Ingrese el valor del primer lado")
    inputB = prompt("Ingrese el valor del segundo lado")
    while(inputA === null || inputB === null || inputA === "" || inputB === "" || isNaN(inputA) || isNaN(inputB)){
        alert("Ingrese valores validos")
        inputA = Number(prompt("Ingrese el valor del primer lado"))
        inputB = Number(prompt("Ingrese el valor del segundo lado"))
        }
        LadoA = Number(inputA)
        LadoB = Number(inputB)
        perimetro = 2*(LadoA+LadoB)
        document.write(`<h2>El perimetro del rectangulo es el siguiente: ${perimetro}</h2>`)
}
calcPerimetro(perimetro)
