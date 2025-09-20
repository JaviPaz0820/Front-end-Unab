function saludar(callback) {
    mostrarEnPantalla("¡Buenos días!");
    callback();
}

function ofrecerCafe() {
    mostrarEnPantalla("¿Quieres un café?");
}

function mostrarEnPantalla(mensaje) {
    const contenedor = document.getElementById("resultado");
    const parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    contenedor.appendChild(parrafo);
    console.log(mensaje); // También lo mostramos en consola
}

saludar(ofrecerCafe);

function operaciones(a, b, minora, potencias) {
    const diferencia = a - b;
    const elevado = Math.pow(a, b);
    minora(a, b, diferencia);
    potencias(a, b, elevado);
}

operaciones(5, 3,
    function (a, b, diferencia) {
        mostrarEnPantalla(`La diferencia entre ${a} y ${b} es: ${diferencia}`);
    },
    function (a, b, elevado) {
        mostrarEnPantalla(`Elevando ${a} a potencia ${b} se obtiene: ${elevado}`);
    }
);

