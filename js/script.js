const sala1 = {
  id: "Sala 1",
  asientosDisponibles: Array.from({ length: 10 }, (_, i) => i + 1),
  asientosReservados: [],

  reservarAsiento(asiento) {
    const index = this.asientosDisponibles.indexOf(asiento);
    if (index !== -1) {
      this.asientosDisponibles.splice(index, 1);
      this.asientosReservados.push(asiento);
      actualizarVista();
    } else {
      alert(`El asiento ${asiento} no está disponible.`);
    }
  },

  cancelarReserva(asiento) {
    const index = this.asientosReservados.indexOf(asiento);
    if (index !== -1) {
      this.asientosReservados.splice(index, 1);
      this.asientosDisponibles.push(asiento);
      actualizarVista();
    } else {
      alert(`El asiento ${asiento} no está reservado.`);
    }
  }
};

function actualizarVista() {
  const contenedor = document.getElementById("sala1");
  contenedor.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const asiento = document.createElement("div");
    asiento.textContent = i;

    if (sala1.asientosReservados.includes(i)) {
      asiento.classList.add("reservado");
    }

    contenedor.appendChild(asiento);
  }
}

// Funciones para botones
function reservar() {
  const numero = parseInt(document.getElementById("numeroAsiento").value);
  if (!isNaN(numero)) {
    sala1.reservarAsiento(numero);
  }
}

function cancelar() {
  const numero = parseInt(document.getElementById("numeroAsiento").value);
  if (!isNaN(numero)) {
    sala1.cancelarReserva(numero);
  }
}

actualizarVista();
