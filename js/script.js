// Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  this.getNombre = function() { return _nombre; };
  this.getEdad = function() { return _edad; };
  this.getRut = function() { return _rut; };
  this.getDiagnostico = function() { return _diagnostico; };

  this.setNombre = function(nuevoNombre) { _nombre = nuevoNombre; };
  this.setEdad = function(nuevaEdad) { _edad = nuevaEdad; };
  this.setRut = function(nuevoRut) { _rut = nuevoRut; };
  this.setDiagnostico = function(nuevoDiagnostico) { _diagnostico = nuevoDiagnostico; };
}

// Función constructora Consultorio
function Consultorio(nombre) {
  this.nombre = nombre;
  this.pacientes = [];
}

// Método para mostrar todos los pacientes
Consultorio.prototype.mostrarPacientes = function() {
  var texto = "Lista de pacientes:\n";
  for (var i = 0; i < this.pacientes.length; i++) {
    var p = this.pacientes[i];
    texto += "Nombre: " + p.getNombre() + "\n";
    texto += "Edad: " + p.getEdad() + "\n";
    texto += "RUT: " + p.getRut() + "\n";
    texto += "Diagnóstico: " + p.getDiagnostico() + "\n";
    texto += "---------------------------\n";
  }
  return texto;
};

// Método para buscar paciente por nombre
Consultorio.prototype.buscarPorNombre = function(nombreBuscado) {
  for (var i = 0; i < this.pacientes.length; i++) {
    var p = this.pacientes[i];
    if (p.getNombre().toLowerCase() === nombreBuscado.toLowerCase()) {
      var texto = "Paciente encontrado:\n";
      texto += "Nombre: " + p.getNombre() + "\n";
      texto += "Edad: " + p.getEdad() + "\n";
      texto += "RUT: " + p.getRut() + "\n";
      texto += "Diagnóstico: " + p.getDiagnostico() + "\n";
      return texto;
    }
  }
  return "No se encontró ningún paciente con ese nombre.";
};

// Instanciación de pacientes y consultorio
var paciente1 = new Paciente("Ana Torres", 34, "12.345.678-9", "Hipertensión");
var paciente2 = new Paciente("Luis Pérez", 45, "98.765.432-1", "Diabetes");
var paciente3 = new Paciente("María López", 29, "11.223.344-5", "Alergia");

var consultorioCentral = new Consultorio("Consultorio Central");
consultorioCentral.pacientes.push(paciente1, paciente2, paciente3);

// Funciones para la interfaz
function mostrarTodos() {
  var resultado = consultorioCentral.mostrarPacientes();
  document.getElementById("resultado").textContent = resultado;
}

function buscarPaciente() {
  var nombre = document.getElementById("nombreBusqueda").value;
  var resultado = consultorioCentral.buscarPorNombre(nombre);
  document.getElementById("resultado").textContent = resultado;
}
