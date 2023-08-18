/* 5- Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
 */


const cadenaDeTexto = (texto) => {
    let may = 0, men = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) === texto.charAt(i).toLowerCase()) {
        men++;
      } else if (texto.charAt(i) === texto.charAt(i).toUpperCase()) {
        may++;
      }
    }
  
    if (may === texto.length) {
      return "Está formado únicamente por mayúsculas";
    } else if (men === texto.length) {
      return "Está formado únicamente por minúsculas";
    } else {
      return "Está formado por una mezcla de ambas";
    }
  }
  
  let texto = prompt("Ingrese una cadena de texto");
  console.log(cadenaDeTexto(texto));
  