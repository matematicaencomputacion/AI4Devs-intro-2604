# Reverse String — versión extendida (reversestring-MEC)

Solución del ejercicio **Reverse String** de AI4Devs, llevada más allá del requerimiento base, con una segunda vista de simetrías geométricas en tiempo real.

## Qué hace

Una página web (HTML + JavaScript vanilla) que invierte una cadena de texto en tiempo real usando `split("").reverse().join("")`.

Ejemplo: al escribir `AI4Devs` devuelve `sveD4IA`.

## Funcionalidades

### Inversor de texto
- Inversión en **tiempo real** mientras se escribe.
- El botón **Invertir** aparece solo cuando hay más de 3 caracteres.
- Validación de longitud **máxima (50)** con alerta de error.
- Soporte de la tecla **Enter** para confirmar.
- **Contador** de caracteres, botón **Limpiar** y botón **Copiar** al portapapeles (con fallback).

### Simetrías en el plano
Un plano cartesiano (ejes punteados en forma de `+`) donde el texto del **2.º cuadrante** se refleja en tiempo real, mostrando las cuatro transformaciones del **grupo de Klein**:

| Cuadrante | Transformación        | Efecto              |
|-----------|-----------------------|---------------------|
| II        | Original              | texto sin alterar   |
| I         | Espejo sobre el eje y | volteo horizontal   |
| III       | Espejo sobre el eje x | volteo vertical     |
| IV        | Simetría al origen    | rotación de 180°    |

Los espejos se hacen con `transform` de CSS (`scaleX(-1)`, `scaleY(-1)`, `scale(-1, -1)`), por lo que son geométricamente exactos.

## Estructura

- `index.html` — interfaz (Tailwind CSS por CDN) con las dos vistas.
- `script.js` — lógica en un módulo (IIFE) con `'use strict'`, constantes de configuración, funciones de propósito único y manejo de errores.
- `prompts.md` — prompts utilizados y chatbot (Claude, de Anthropic).

## Cómo probar

1. Abrir `index.html` en el navegador.
2. Escribir un carácter asimétrico (por ejemplo `R` o `F`) para apreciar mejor las reflexiones en el plano de la derecha.

---
*Feedback bienvenido, especialmente sobre estructura del código y accesibilidad.*
