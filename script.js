/* 

  Traer el boton y el párrafo

*/

const boton = document.getElementById("button");
const color = document.getElementById("color");

/* 

  Manejar el evento

*/

boton.addEventListener("click", cambiarColor);

/* 

  Definir la funcion

*/

function cambiarColor () {
  // Codigo que se ejecuta
  // Funcion anidada necesaria para colores aleatorios
  function colores () {
    // Codigo que se ejecuta
    const opciones = "0123456789ABCDEF";
    let colorHex = "#";
    // Recorrer el string opciones
    for (let i = 0; i < 6; i++) {
      let indiceAleatorio = Math.floor(Math.random() * 16);
      colorHex += opciones[indiceAleatorio]; // #000000
    }
  return colorHex;
  }
  let colorAleatorio = colores();
  // Actualiza el texto y color de fondo
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
}