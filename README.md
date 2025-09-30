# 🇨🇱 Feriados de Chile - Proyecto Web

Este proyecto muestra los feriados oficiales de Chile para el año actual, consumiendo datos desde una API externa. El usuario puede elegir entre dos métodos para cargar los datos: **Fetch API** o **XMLHttpRequest (XHR)**.

---

##Tecnologías utilizadas

- HTML5  
- CSS3 + Bootstrap 5  
- JavaScript (ES6)  
- jQuery  
- API pública: [feriadosapp.com](https://www.feriadosapp.com/api/holidays.json)

---

##Cómo usar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Haz clic en uno de los botones:
   - **Cargar con Fetch**: usa la API Fetch moderna.
   - **Cargar con XHR**: usa el objeto XMLHttpRequest tradicional.
4. Los feriados se mostrarán en una tabla con fecha, nombre y tipo.

---

## Estructura del proyecto
m5 abp5
├── css/style.css
├──js/script.js
├── index.html
└──readme.md


---

## API Utilizada

Endpoint: https://api.boostr.cl/feriados/en.json
Método: GET
Formato: JSON
Descripción: API gratuita que proporciona los feriados oficiales de Chile

---

## Funcionalidades 

## Principales
- Carga automática de feriados al iniciar.
- Tabla responsive.
- Manejo de estados de carga y error.
- Soporte para múltiples estructura de datos.

---
## Autor

Javiera Ampuero Millaquipai

