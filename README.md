# Proyecto Comparativo de Librerías UI y SSR con Vue.js y Nuxt.js
El presente proyecto tiene como propósito explorar, comparar e implementar diferentes librerías de interfaz de usuario (UI) complementarias para Vue.js — específicamente BootstrapVue, Vuetify, Buefy y Element Plus — evaluando sus características, ventajas y desventajas mediante la creación de una misma interfaz base.
Posteriormente, se desarrolla una aplicación con renderizado del lado del servidor (SSR) utilizando Nuxt.js 3.

## 🎯 Objetivos del Proyecto

- Identificar las principales librerías UI del ecosistema Vue.
- Implementar una interfaz funcional utilizando cada librería.
- Comparar sus ventajas y desventajas en usabilidad, personalización y rendimiento.
- Explorar el funcionamiento del SSR mediante Nuxt.js 3.

---

## 🧩 Actividad 1: Comparación de Librerías UI para Vue.js

### 💻 Interfaz base implementada
Todas las versiones desarrolladas incluyen:
- Barra de navegación con botón de modal
- Tres cards con imagen, título, descripción y botón de acción
- Formulario de contacto con validación básica
- Modal de confirmación

---

### 🟦 BootstrapVue 3
Framework base: Bootstrap 5 + Vue 3
Instalación:

npm install bootstrap bootstrap-vue-3

### Ventajas:
- Integración sencilla y rápida.
- Componentes bien documentados.
- Amplia compatibilidad con ecosistemas web modernos.

### Desventajas:
- Personalización visual limitada.
- Dependencia fuerte del sistema Bootstrap.
- Ideal para: proyectos empresariales o dashboards con estilo clásico.

### 🟣 Vuetify 3
Framework base: Material Design
Instalación: 

npm install vuetify@3 vite-plugin-vuetify

### Ventajas:
- Gran variedad de componentes.
- Sistema de diseño consistente y moderno.
- Personalización avanzada mediante temas.

### Desventajas:
- Curva de aprendizaje mayor.
- Tamaño de paquete elevado.
- Ideal para: aplicaciones modernas y proyectos con foco visual.

### 🟢 Buefy
Framework base: Bulma + Vue 2
Instalación: 

npm install buefy@0.9.29 bulma@0.9.4 --legacy-peer-deps

### Ventajas:
- Ligero y simple.
- Sintaxis clara y componentes esenciales.
- qqBasado en CSS puro (Bulma).

### Desventajas:
- No compatible con Vue 3.
- Menor cantidad de componentes.
- Ideal para: aplicaciones ligeras o proyectos educativos.

### 🟧 Element Plus
Framework base: Vue 3
Instalación:

npm install element-plus

Ventajas:
Estilo profesional y elegante.
Componentes complejos (tablas, formularios, menús avanzados).
Ideal para entornos empresariales.
Desventajas:
Bundle algo pesado.
Documentación principalmente en inglés/chino.
Ideal para: paneles administrativos o aplicaciones B2B.

### Comparitiva General 

| Librería           | Versión Vue | Estilo Base          | Facilidad de Uso | Personalización | Peso Final | Ideal para...       |
| ------------------ | ----------- | -------------------- | ---------------- | --------------- | ---------- | ------------------- |
| **BootstrapVue 3** | Vue 3       | Bootstrap 5          | ⭐⭐⭐⭐             | ⭐⭐              | Medio      | Dashboards clásicos |
| **Vuetify 3**      | Vue 3       | Material Design      | ⭐⭐⭐              | ⭐⭐⭐⭐            | Alto       | Apps modernas       |
| **Buefy**          | Vue 2       | Bulma                | ⭐⭐⭐⭐             | ⭐⭐              | Bajo       | Apps ligeras        |
| **Element Plus**   | Vue 3       | Propio (Minimalista) | ⭐⭐⭐⭐             | ⭐⭐⭐             | Medio-Alto | Apps empresariales  |


### 🧭 Conclusión de la Comparativa UI
Tras las pruebas, se concluye que:
- Vuetify ofrece la mejor experiencia visual y flexibilidad.
- BootstrapVue es la opción más rápida de implementar.
- Buefy destaca por su ligereza y simplicidad.
- Element Plus es la opción más profesional y escalable para proyectos empresariales.

--- 

## 🧠 Actividad 2: Server Side Rendering (SSR) con Nuxt.js 3
💡 Objetivo
Comprender el funcionamiento del Server Side Rendering (SSR), sus diferencias con el Client Side Rendering (CSR), y cómo Nuxt.js 3 facilita la implementación de SSR para mejorar SEO, rendimiento y experiencia de usuario.

### ⚙️ Instalación de Nuxt.js 3 

npx nuxi init vue-nuxt3
cd vue-nuxt3
npm install
npm run dev

### 🧱 Estructura del Proyecto

vue-nuxt3/
├── app.vue
├── pages/
│   └── index.vue
├── nuxt.config.ts
└── package.json

---

### 🧩 Conclusiones Generales
El proyecto permitió:
- Reconocer las diferencias funcionales entre librerías UI del ecosistema Vue.
- Evaluar la usabilidad, personalización y rendimiento de cada framework.
- Implementar con éxito un proyecto SSR con Nuxt.js 3, comprendiendo sus beneficios reales frente al CSR.
- Analizar Quasar como framework versátil para entornos SSR, móviles y de escritorio.
  
Conclusión final:
- Vuetify resultó la librería más completa y flexible para la interfaz, mientras que Nuxt.js 3 se posiciona como la solución ideal para aplicaciones Vue con necesidades de SEO, rendimiento y escalabilidad.

--- 

### Autor

Javiera Ampuero Millaquipai
