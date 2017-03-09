function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    /*Lanzamiento de prompt para obtener los datos del del usuario, guardadndolos en variables
    que serán los parametros de mi clase estudiante a la que referenciare para hacer los
    objetos estudiante*/
    var nombre=prompt("Ingresa el nombre del estudiante");
    var puntajeTecnico=prompt("Ingresa el puntaje tecnico");
    var puntajeHSE=prompt("Ingresa el puntaje de HSE");

    /*Creando la clase Estudiante con un constructor para que me acepte los parametros
    que estoy obteniendo con los prompt y hacer mis objetos estudiante instanciandola*/
    function Estudiante (nombre, puntajeTecnico, puntajeHSE) {
      this.nombre = nombre;
      this.puntajeTecnico= puntajeTecnico;
      this.puntajeHSE= puntajeHSE;
      this.mostrarEstudianteAgregado= function(){
      }
    }; // aqui hay un problema con el punto y coma, no se en cuq ellave va.
    var agregarEstudiante = new Estudiante(nombre, puntajeTecnico, puntajeHSE);
    document.write(this.nombre + this.puntajeTecnico + this.puntajeHSE );


}




var preguntas=["Ingresa el nombre del estudiante","Ingresa el puntaje tecnico", "Ingresa el puntaje de HSE"];
for(var i=0; i<preguntas.length; i++){
  prompt(preguntas(i);
};
