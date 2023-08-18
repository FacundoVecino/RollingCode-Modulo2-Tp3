/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = []
function vectorCiudades () {
    let ciudad = prompt("Ingrese ciudades")
    if (ciudad !== null && ciudad !== "") {
        ciudades.push(ciudad);
        vectorCiudades()
    } else {
        document.write(`<p>El arreglo tiene ${ciudades.length} elementos</p>`)
        document.write("<ul>")
            document.write('<li>Primera posición: ' + ciudades[0] + '</li>');
            document.write('<li>Tercera posición: ' + ciudades[2] + '</li>');
            document.write('<li>Última posición: ' + ciudades[ciudades.length - 1] + '</li>');
        document.write("</ul>")
        ciudades.push("Paris");
        document.write("<ul>")
            document.write('<li>Última posición: ' + ciudades[ciudades.length - 1] + '</li>');
        document.write("</ul>")
        document.write("<h1>Arreglo de ciudades</h1>")
        document.write("<ul>")
            ciudades[1] = "Barcelona"
            ciudades.forEach((ciudad) => {
                document.write(`<li>Elemento: ${ciudad} </li>`)
            })
        document.write("</ul>")
        
    }
}

vectorCiudades()

