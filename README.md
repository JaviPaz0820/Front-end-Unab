# TecnoChile - Sistema de Gestión de Productos

**Módulo 7 - Actividad Evaluativa 3**

Aplicación web tipo SPA desarrollada con **Vue 3**, orientada a la gestión de inventario de productos para la tienda ficticia *TecnoChile*. Este proyecto académico integra tecnologías modernas como Vuex para el manejo de estado, Vue Router para la navegación y Bootstrap 5 para el diseño visual.

---

## Tecnologías Utilizadas

- **Vue 3 (Composition API)** – Framework progresivo para interfaces de usuario
- **Vite** – Herramienta de desarrollo rápida y ligera
- **Vuex** – Gestión centralizada del estado de la aplicación
- **Vue Router** – Enrutamiento dinámico entre vistas
- **Bootstrap 5 (CDN)** – Framework CSS para estilos responsivos

---

## Instalación y Ejecución

### Requisitos previos
- Node.js ≥ 16.x
- npm ≥ 8.x

--- 

### Pasos para ejecutar el proyecto

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
# Acceder a http://localhost:5173 desde el navegador

#Compilación para producción
npm run build

--- 

**Estructura del proyecto**

src/
├── views/               # Vistas principales
│   ├── Home.vue         # Página de inicio
│   ├── Products.vue     # Gestión de productos
│   └── Login.vue        # Vista de login (demo)
├── store/               # Configuración de Vuex
│   └── index.js
├── router/              # Configuración de rutas
│   └── index.js
├── App.vue              # Componente raíz
├── main.js              # Punto de entrada
└── style.css            # Estilos globales

---

# Funcionalidades Principales

- Gestión de productos 
 - Visualización de productos con código, nombre, stock y precio
 - Búsqueda en tiempo real por nombre
 - Contadores automáticos: total de productos y stock acumulado
 - Tarjetas para productos destacados
 -Operaciones CRUD:
   - Crear producto (formulario con validación)
   - Editar producto (mediante prompt) 
   - Eliminar producto (con confirmación)

---

# Autenticación Demo (/login)
- Formulario básico sin conexión a backend
- Estado de sesión gestionado con Vuex
- Redirección automática tras login

--- 

## Navegación
- Rutas disponibles: / (Inicio), /products (Productos), /login
- Menú superior con estado de sesión visible

---

# Modelo de datos
{
  codigo: "0001",           // Identificador único
  nombre: "Audífonos",      // Nombre del producto
  stock: 100,               // Cantidad disponible
  precio: 30000,            // Precio en CLP
  color: "blue",            // Color para visualización
  destacado: true           // Indicador de producto destacado
}

---

# Estado Global (Vuex)
- state.products – Lista de productos
- state.user – Usuario autenticado (o null)
- getters – totalProductsCount, totalStock
- mutations/actions – Operaciones CRUD y login/logout

---

# Guía de uso
- Inicio de sesión → Ingresar correo en /login → Click en "Entrar"
- Visualizar productos → Acceder a /products para ver listado y métricas
- Buscar producto → Escribir en el campo de búsqueda
- Agregar producto → Completar formulario y hacer clic en "Añadir"
- Editar producto → Clic en "Editar" → Modificar nombre
- Eliminar producto → Clic en "Borrar" → Confirmar acción

---

# Solución de problemas comunes 
- Error: "Failed to resolve import 'vuex'"
npm install

- Puerto 5173 en uso
npm run dev -- --port 3000

## Autor
Javiera Ampuero Millaquipai
