# Prompts utilizados

## Chatbot
Claude (Anthropic).

## Prompt
"Necesito una página web sencilla con HTML y JavaScript que invierta el orden de una cadena de texto. Por ejemplo, si escribo 'AI4Devs' debe devolver 'sveD4IA'. Me apoyo en los archivos semilla index.html y script.js de la carpeta template. Además quiero las dos mejoras opcionales: que la cadena invertida se actualice en tiempo real mientras escribo, y que el boton de invertir solo aparezca cuando hay mas de 3 letras."

## Resultado
El chatbot genero el index.html (un input, un boton y un espacio para mostrar el resultado) y el script.js con la logica de inversion usando split("").reverse().join(""), la actualizacion en tiempo real con el evento "input", y la logica para ocultar o mostrar el boton segun la cantidad de caracteres.
