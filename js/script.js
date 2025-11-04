// Mostrar fecha y hora actual
function mostrarFechaHora() {
  const ahora = new Date();
  const fechaHora = ahora.toLocaleString();
  console.log("Fecha y hora actual:", fechaHora);
}
mostrarFechaHora();

// Validar formulario
function validar() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const errorContenedor = document.getElementById("errorMensaje");

  errorContenedor.textContent = ""; // Limpiar mensaje anterior

  if (!nombre || !email || !mensaje) {
    errorContenedor.textContent = "Por favor, completa todos los campos del formulario.";
    return false; // Evita el envío del formulario
  }

  return true; // Permite el envío
}
