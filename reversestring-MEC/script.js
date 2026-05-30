// Tomamos los elementos de la página con los que vamos a trabajar
const entrada = document.getElementById("entrada");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

// Función que invierte una cadena de texto
function invertirTexto(texto) {
    // 1. split("") convierte el texto en una lista de caracteres
    // 2. reverse() da vuelta el orden de la lista
    // 3. join("") vuelve a unir los caracteres en un texto
    return texto.split("").reverse().join("");
}

// Función que actualiza lo que se muestra en pantalla
function actualizar() {
    const texto = entrada.value;

    // Mejora opcional: el botón solo aparece con más de 3 letras
    if (texto.length > 3) {
        boton.style.display = "inline";
    } else {
        boton.style.display = "none";
    }

    // Mejora opcional: mostramos el texto invertido en tiempo real
    resultado.textContent = invertirTexto(texto);
}

// Actualizamos cada vez que el usuario escribe una tecla
entrada.addEventListener("input", actualizar);

// También respondemos al clic del botón
boton.addEventListener("click", actualizar);

// Dejamos el botón oculto al cargar la página
actualizar();
