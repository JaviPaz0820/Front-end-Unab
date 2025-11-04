# 🛒 TEchno Chile (Vue 3 + Vite)
Demo de una tienda tecnológica desarrollada con Vue 3 y Vite, que presenta un catálogo de productos en un carrusel de tarjetas. Este proyecto fue creado con fines educativos y de demostración, aplicando buenas prácticas de desarrollo front-end moderno.

## ✨ Características
- Catálogo de productos tecnológicos en formato carrusel
- Componente Header con título y barra de navegación
- Tarjetas de producto con imagen, descripción, precio en CLP y stock
- Botón "Comprar" que reduce el stock disponible
- Pruebas unitarias básicas para el componente Header

---

## 📂 Estructura del Proyecto
Código
├── src/
│   ├── components/
│   │   ├── Header.vue           # Header con título y navbar
│   │   └── ProductCard.vue      # Card de producto con botón de compra
│   └── App.vue                  # Página principal con carrusel de productos
├── tests/
│   └── header.spec.js           # Pruebas unitarias para Header
├── package.json
├── vite.config.js
└── ...

--- 

## ⚙️ Cómo ejecutar el proyecto
- Desde una terminal (ej. PowerShell en Windows):

### Instalar dependencias:
bash
npm install
- Levantar la app en modo desarrollo:
bash
npm run dev
- Ejecutar pruebas unitarias (usando Jest):
bash
npm test

--- 
### Autor

Javiera Ampuero Millaquipai
