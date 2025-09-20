# ExpressGo - Optimización de rutas de entrega

Este proyecto simula el procesamiento de rutas de entrega para la empresa ficticia **ExpressGo**, utilizando funcionalidades modernas de JavaScript (ES6+) y garantizando compatibilidad con navegadores antiguos mediante Babel y Webpack.

---

## Objetivo

Optimizar la gestión de entregas:
- Eliminar direcciones duplicadas.
- Sumar la cantidad total de paquetes por dirección.
- Ordenar las rutas por prioridad (más paquetes primero).
- Generar un reporte legible en pantalla.

---

## Tecnologías utilizadas

- **JavaScript ES6+**: `let/const`, `arrow functions`, `template literals`, `Map`, `destructuring`, `spread/rest`, `async/await`, `Promise`.
- **Webpack**: para empaquetar el código.
- **Babel**: para transpilar ES6+ a ES5.
- **Polyfills**: con `core-js` y `regenerator-runtime` para compatibilidad.

---

##  Estructura del proyecto
expressgo/
├── dist/
├── src/
│ ├── index.html
│ ├── js/main.js
│ └── css/style.css
├── package.json
├── package.json
├── .babelrc
└── README.md

---

## Instalación y ejecución

1. Clona el repositorio o descarga el proyecto.
2. Instala las dependencias:

```bash
npm install

3. Compila el proyecto
npm run build

4. Abre src/index.html en tu navegador.

