# Formulario Interactivo con Vue 3

Implementación de controles de tipo **radio** y **select** para capturar y mostrar información del usuario de manera dinámica.

---

## Objetivo del proyecto

El objetivo de este ejercicio es **implementar un formulario interactivo** utilizando **Vue 3 y su sistema de binding bidireccional (`v-model`)**, cumpliendo los siguientes requerimientos:

- Utilizar un conjunto de controles **radio** para permitir seleccionar el tipo de estudios.
- Mostrar en pantalla el valor actualmente seleccionado.
- Implementar un control **select** con los días de la semana.
- Mostrar en pantalla el día seleccionado.
- Iniciar los valores del modelo desde el código (no mediante atributos HTML como `checked`).
- Aplicar buenas prácticas de estructura y estilos en componentes Vue.

---

## Instalación y ejecución

Sigue estos pasos en tu terminal 

```bash
# 1. Clonar el repositorio o crear la carpeta del proyecto
git clone <URL_DEL_REPOSITORIO> formulario-vue
cd formulario-vue

# 2. Instalar dependencias
npm install

# 3. Ejecutar el servidor de desarrollo
npm run dev

Luego abre tu navegador en la dirección que indica la terminal, normalmente:
http://localhost:5173

## Instalación y ejecución

formulario-vue/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ components/
│  │  ├─ EstudiosForm.vue    
│  │  └─ DiasSelect.vue     
│  ├─ App.vue                 
│  └─ main.js                 
├─ index.html
├─ package.json
└─ vite.config.js

## Autor
Javiera Ampuero Millaquipai
