var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

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
    que estoy obteniendo con los prompt y hacer mis objetos estudianteAgregado instanciandola*/
    function Estudiante (nombre, puntajeTecnico, puntajeHSE) {
      this.nombre = nombre;
      this.puntajeTecnico= parseInt(puntajeTecnico);
      this.puntajeHSE= parseInt(puntajeHSE);
    };
    /*Creo mi objeto estudianteAgregado instanciando la clase Estudiante
    y retorno ese objeto*/
    var estudiante = new Estudiante(nombre, puntajeTecnico, puntajeHSE);

/*AGREGANDO ESTUDIANTE A LA LISTA ESTUDIANTES. 1) Creo un array vacio para guardar los objetos*/
    estudiantes.push(estudiante);
    /*Retornando el estudiante recientemente creado*/
    return estudiante;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
/*Hago un for para avanzar en los indices(que tienen dentro objetos estudiante) de la lista*/
    for (var i=0; i< estudiantes.length; i++){
     return mostrar(estudiantes[i]);
    };


}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
