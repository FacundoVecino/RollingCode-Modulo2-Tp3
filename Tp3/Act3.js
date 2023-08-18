/* Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados 
y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */
const resultDados = []
function lanzaDados() {
    for (i = 0; i < 50; i = i + 1){
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;

        const sumaDados = dado1 + dado2;

        if (resultDados[sumaDados]){
            resultDados[sumaDados]++
        } else {
            resultDados[sumaDados] = 1
        }
    }

    return resultDados;
}
const resultadoLanzamiento = lanzaDados()
console.log(`Resultado despues de 50 intentos:`)
console.log(resultadoLanzamiento)