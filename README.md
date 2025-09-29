# M5AE4 - ABP4: Práctica de Asincronía en JavaScript

## Propósito del Proyecto

Este ejercicio tiene como objetivo aplicar distintos mecanismos de programación asíncrona en JavaScript para resolver una tarea sencilla: obtener y mostrar información de un usuario simulado. Se busca que el estudiante comprenda y distinga el uso de **callbacks**, **promesas** y **async/await**, reconociendo sus diferencias y ventajas.

## Componentes del Proyecto

- **`index.html`**  
  Estructura principal de la interfaz web. Incluye un título, un área para mostrar los datos del usuario (`#usuario-info`) y tres botones para activar cada método de asincronía.

- **`css/styles.css`**  
  Archivo de estilos que define el diseño visual de la página: tipografía, colores, botones y tarjetas de información.

- **`main.js`**  
  Script que contiene la lógica de programación:
  - `obtenerUsuarioCallback(callback)` → Simula una llamada asíncrona usando `setTimeout` y ejecuta un callback con los datos.
  - `obtenerUsuarioPromesa()` → Devuelve una promesa que se resuelve con los datos del usuario.
  - `obtenerUsuarioAsync()` → Función `async` que espera el resultado de la promesa anterior.
  - Manejadores de eventos para los botones, que actualizan el contenido de `#usuario-info` mostrando mensajes de carga y resultados.

##  Cómo Usarlo

1. Abre el archivo `index.html` en tu navegador.
2. Haz clic en uno de los botones:
   - **Obtener Usuario (Callback)**
   - **Obtener Usuario (Promesa)**
   - **Obtener Usuario (Async/Await)**
3. Se mostrará un mensaje de carga durante 2 segundos, seguido por los datos del usuario.

##  Ejemplo de Comportamiento

- **Estado inicial**: El contenedor muestra un mensaje genérico.
- **Al hacer clic**: Aparece un texto como “Cargando (callback)...”.
- **Resultado final**:

Nombre: Juanito Pérez 
Correo: juanito.perez@example.com 
Ciudad: Santiago, Chile

## Autor

Javiera Paz Ampuero Millaquipai