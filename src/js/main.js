import 'core-js/stable';
import 'regenerator-runtime/runtime';

const entregas = [
  { direccion: "Av. Siempre Viva 742", paquetes: 4 },
  { direccion: "Calle Falsa 123", paquetes: 2 },
  { direccion: "Av. Siempre Viva 742", paquetes: 3 },
  { direccion: "Pje. Las Rosas 456", paquetes: 5 },
  { direccion: "Calle Falsa 123", paquetes: 1 }
];

// Simula carga de datos con async/await
const cargarEntregas = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(entregas), 500);
  });
};

// Procesa entregas
const procesarEntregas = async () => {
  const datos = await cargarEntregas();

  // Map para sumar paquetes por dirección
  const mapa = new Map();

  for (const { direccion, paquetes } of datos) {
    mapa.set(direccion, (mapa.get(direccion) || 0) + paquetes);
  }

  // Convertir a array y ordenar
  const ordenadas = Array.from(mapa.entries())
    .map(([direccion, paquetes]) => ({ direccion, paquetes }))
    .sort((a, b) => b.paquetes - a.paquetes);

  // Generar reporte con template literals
  const reporte = ordenadas.map(({ direccion, paquetes }) =>
    `📦 ${paquetes} paquetes → ${direccion}`
  ).join('\n');

  // Mostrar en pantalla
  document.getElementById('reporte').textContent = reporte;
};

// Función flecha con parámetro por defecto
const iniciar = (mensaje = "Iniciando procesamiento...") => {
  console.log(mensaje);
  procesarEntregas();
};

iniciar();
