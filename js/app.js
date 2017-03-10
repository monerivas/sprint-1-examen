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
    var nombreEstudiante=prompt("Ingresa el nombre del estudiante");
    var puntajeTecnico=prompt("Ingresa el puntaje tecnico");
    var puntajeHSE=prompt("Ingresa el puntaje de HSE");

    /*Creo mi objeto estudianteAgregado instanciando la clase Estudiante
    y retorno ese objeto*/
    var estudiante = new Estudiante(nombreEstudiante, puntajeTecnico, puntajeHSE);

    /*AGREGANDO ESTUDIANTE A LA LISTA ESTUDIANTES.
    Con el metodo.push voy metiendo items al arreglo/lista que se llama estudiantes */
    estudiantes.push(estudiante);
    /*Retornoel estudiante recientemente creado y agregado*/
    return estudiante;

}


function Estudiante (nombreEstudiante, puntajeTecnico, puntajeHSE) {
  /*Creando la clase Estudiante con un constructor para que me acepte los parametros
  que estoy obteniendo con los prompt y hacer mis objetos estudianteAgregado instanciandola.
  La saque de la funcion agregarEstudiante para que no tenga problemas con el scope,
  porque aunque si jala si la dejo dentro, quiza despues no jale*/
  this.nombreEstudiante = nombreEstudiante;
  this.puntajeTecnico= parseInt(puntajeTecnico);
  this.puntajeHSE= parseInt(puntajeHSE);
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";
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

    /* Esta es la forma que mas le entiendo, porque todavia no me familiarizo
    con el forEach.*/

    var estudiantesHTML= ""; /*Declaro la var estudiantesHTML vacia para que ahi vaya guardando
    la concatenacion de mis objetos estudiantes como strings porque en la funcion mostrar
    el HTML es un string gigante y si ellos lo pusieron como string, al llamar la funcion tambien
    debe ser en string sino podria haber un probrema de compatibilidad de datos, digo yo*/

    /*Hago un for para avanzar en los indices(que tienen dentro objetos estudiantecomo valor) de la lista
    for (var i=0; i< estudiantes.length; i++){
      //Concateno cada objeto con el siguiente y esa concatenacion la guardo en la variable typeOf string estudiantesHTML
     estudiantesHTML= estudiantesHTML + mostrar(estudiantes[i]);
    };
    //Imprimo la variable donde guarde esa concatenacion
    return estudiantesHTML;*/
    /*No me jalaba el forEach por un bendito parentesis pero ya!*/
    estudiantes.forEach(
      function(nombreObjetoLocal){
        estudiantesHTML += mostrar (nombreObjetoLocal)
      }
    );
      return estudiantesHTML;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    /*Filter regresa siempre un arreglo, NO un objeto CUIDADO, aunque solo tenga un item retornando
    ese item sera un indice de arreglo, pero en este caso funciona porque nuestro arreglo esta
     lleno de objetos*/

     /*Declaro una variable donde voy a meter todo el proceso*/
     /*Le aplico el filtrado a mi arreglo estudiantes*/
     /*La instruccion que es el filtro que tienen que pasar los objetos del arreglo
     esn una comparacion de la propiedad nombreEstudiante del objeto estudiante con
     el argumento nombre que mete el usuario*/
  var estudiantesFiltrados= estudiantes.filter(function(alumno){
      return alumno.nombreEstudiante.toLowerCase() == nombre.toLowerCase();
    });

    /*Si son iguales, retorna ese objeto que paso el filtro*/
    return estudiantesFiltrados;

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    var ordenadosPorTopTecnico= estudiantes.sort(function(itemA, itemB){
      return itemB.puntajeTecnico > itemA.puntajeTecnico;
    });
    return ordenadosPorTopTecnico;

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenadosPorHSE= estudiantes.sort(function(itemA, itemB){
      return itemB.puntajeHSE > itemA.puntajeHSE;
    });
    return ordenadosPorHSE;


}
