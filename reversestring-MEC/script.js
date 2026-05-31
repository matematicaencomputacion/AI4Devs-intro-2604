// script.js - Invertir texto + simetrias en el plano (version completa)

(function () {
    "use strict";

    // --- Configuracion ---
    const MIN_LARGO = 3;    // el boton aparece a partir de este largo
    const MAX_LARGO = 50;   // largo maximo permitido

    // --- Elementos del DOM ---
    const entrada = document.getElementById("entrada");
    const boton = document.getElementById("boton");
    const limpiar = document.getElementById("limpiar");
    const copiar = document.getElementById("copiar");
    const contador = document.getElementById("contador");
    const resultado = document.getElementById("resultado");
    const contenedorResultado = document.getElementById("contenedorResultado");
    const alerta = document.getElementById("alerta");

    // Cuadrantes del plano de simetrias
    const qII = document.getElementById("qII");
    const qI = document.getElementById("qI");
    const qIII = document.getElementById("qIII");
    const qIV = document.getElementById("qIV");

    // --- Logica principal ---

    // Invierte una cadena de texto
    function invertirTexto(texto) {
        return texto.split("").reverse().join("");
    }

    // Coloca el texto en el 2do cuadrante y sus reflejos (el espejo lo hace el CSS)
    function actualizarPlano(texto) {
        qII.textContent = texto;
        qI.textContent = texto;
        qIII.textContent = texto;
        qIV.textContent = texto;
    }

    // Actualiza la pantalla cada vez que cambia el texto
    function actualizar() {
        const texto = entrada.value;
        const largo = texto.length;

        // El plano refleja siempre lo que se escribe, en tiempo real
        actualizarPlano(texto);

        contador.textContent = largo + " / " + MAX_LARGO;
        limpiar.classList.toggle("hidden", largo === 0);

        // Validacion de largo maximo
        if (largo > MAX_LARGO) {
            marcarError(true);
            mostrarAlerta("error", "El texto supera los " + MAX_LARGO + " caracteres.");
            ocultarResultado();
            boton.classList.add("hidden");
            return;
        }
        marcarError(false);
        limpiarAlerta();

        // El boton aparece solo con mas de MIN_LARGO caracteres
        boton.classList.toggle("hidden", largo <= MIN_LARGO);

        // Resultado en tiempo real
        if (largo === 0) {
            ocultarResultado();
        } else {
            resultado.textContent = invertirTexto(texto);
            contenedorResultado.classList.remove("hidden");
        }
    }

    // Accion al confirmar (boton Invertir o tecla Enter)
    function confirmar() {
        const texto = entrada.value.trim();
        if (texto.length === 0) {
            mostrarAlerta("error", "Escribi algo para invertir.");
            return;
        }
        if (texto.length > MAX_LARGO) {
            mostrarAlerta("error", "El texto supera los " + MAX_LARGO + " caracteres.");
            return;
        }
        resultado.textContent = invertirTexto(texto);
        contenedorResultado.classList.remove("hidden");
        mostrarAlerta("exito", "Texto invertido!");
    }

    // Copia el resultado al portapapeles (con fallback)
    async function copiarResultado() {
        const texto = resultado.textContent;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(texto);
            } else {
                copiarFallback(texto);
            }
            feedbackCopiado();
        } catch (error) {
            console.error("Fallo el copiado moderno:", error);
            try {
                copiarFallback(texto);
                feedbackCopiado();
            } catch (e2) {
                console.error("Fallo el fallback de copiado:", e2);
                mostrarAlerta("error", "No se pudo copiar al portapapeles.");
            }
        }
    }

    function copiarFallback(texto) {
        const temp = document.createElement("textarea");
        temp.value = texto;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
    }

    function feedbackCopiado() {
        copiar.textContent = "Copiado!";
        setTimeout(function () { copiar.textContent = "Copiar"; }, 1500);
    }

    // Limpia todo
    function limpiarTodo() {
        entrada.value = "";
        actualizar();
        limpiarAlerta();
        entrada.focus();
    }

    // --- Helpers de interfaz ---

    function ocultarResultado() {
        contenedorResultado.classList.add("hidden");
    }

    function marcarError(hayError) {
        entrada.classList.toggle("border-red-500", hayError);
        entrada.classList.toggle("border-slate-300", !hayError);
    }

    function mostrarAlerta(tipo, mensaje) {
        const colores = tipo === "error"
            ? "bg-red-100 text-red-700 border-red-400"
            : "bg-green-100 text-green-700 border-green-400";
        alerta.className = "mb-4 px-3 py-2 rounded-lg border text-sm " + colores;
        alerta.textContent = mensaje;
    }

    function limpiarAlerta() {
        alerta.className = "hidden mb-4";
        alerta.textContent = "";
    }

    // --- Eventos ---
    entrada.addEventListener("input", actualizar);
    entrada.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter") {
            confirmar();
        }
    });
    boton.addEventListener("click", confirmar);
    copiar.addEventListener("click", copiarResultado);
    limpiar.addEventListener("click", limpiarTodo);

    // Estado inicial
    actualizar();

})();
