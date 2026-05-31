# Prompts utilizados

## Chatbot
Claude (Anthropic).

## Prompt (version completa, con criterios de aceptacion)
"Quiero llevar mi pagina que invierte texto a una version completa y profesional. Apoyate en index.html y script.js. Segui estos criterios:

Criterios tecnicos:
1. Separar HTML y JavaScript en index.html y script.js.
2. Usar JavaScript vanilla, sin librerias.
3. Organizar el codigo de forma clara (modulo, constantes, funciones de un solo proposito) y comentado.
4. Manejar errores con try/catch y dejar mensajes en consola.
5. Usar Tailwind CSS por CDN.
6. Que sea responsive.

Criterios funcionales:
1. Un input para el texto y un boton para invertir.
2. La cadena invertida se actualiza en tiempo real mientras escribo.
3. El boton de invertir aparece solo cuando hay mas de 3 caracteres.
4. Largo maximo de 50 caracteres; si se supera, marcar el input con estilo de error y mostrar una alerta.
5. La accion tambien se dispara con la tecla Enter.
6. Un contador de caracteres y un boton para limpiar el input.
7. Un boton para copiar el resultado al portapapeles, con confirmacion visual.

Criterio general:
1. Titulo y descripcion atractivos.

Haceme las preguntas que necesites antes de generar el codigo."

## Resultado
El chatbot genero un index.html con Tailwind (tarjeta centrada y responsive) y un script.js organizado en un modulo (IIFE) con 'use strict', constantes de configuracion, funciones de proposito unico, validaciones, manejo de errores con try/catch, contador de caracteres, copiado al portapapeles con fallback, y la inversion con split("").reverse().join("").
