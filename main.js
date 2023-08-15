const divProyectos = document.querySelector("#proyecto");
console.log(divProyectos);

const setCards = () => {
  if (divProyectos.style.display === "none") {
    divProyectos.style.display = "flex";
  } else {
    divProyectos.style.display = "none";
  }
};

const btn = document.querySelector(".btn-m-o");
btn.addEventListener("click", setCards);
// para los iconos obtener el

///////////////////////////chat boot///////////////////////////////
const mensaje = document.querySelector("#mensaje"); //mensaje que escribe el usurio
const pregunta = document.querySelector("#pregunta");
const respuesta = document.querySelector("#respuesta");
const btnEnviar = document.querySelector("#btn-enviar"); //bt al lado del mensaje que escribe el usuario
const btnCursos = document.querySelector("#btn-cursos");
const btnDias = document.querySelector("#btn-dias");
const btnInscripciones = document.querySelector("#btn-incripciones");

btnEnviar.addEventListener("click", (e) => {
  let text = mensaje.value;
  let parrafo = document.createElement("p");
  parrafo.textContent = text;
  pregunta.appendChild(parrafo);
  mensaje.value = " ";
  checkMsj(text);
});

const checkMsj = (res) => {
  resMin = res.toLowerCase(); //paso respuesta a minuscula

  if (resMin === "hola") {
    let parrafo = document.createElement("p");
    parrafo.classList.add("contenedor-respuesta");
    // botones para que cuando haga click elija las opciones
    parrafo.innerHTML += `
    <div>Hola, elije una de las siguientes opciones<div/>
    <div style="display: flex;">
      <button id="btn-cursos" class="btn btn-outline-primary" onclick="checkMsj('Cursos')">Cursos</button>
      <button id="btn-dias" class="btn btn-outline-primary" onclick="checkMsj('Dias de cursado')">Dias de cursado</button>
      <button id="btn-incripciones" class="btn btn-outline-primary" onclick="checkMsj('Inscripciones')">Incripciones</button>
    </div>`;
    respuesta.appendChild(parrafo);
  } else if (resMin === "cursos") {
    //aprieta btn-cursos, le pasa la palabra cursos
    let parrafo = document.createElement("p");
    parrafo.classList.add("contenedor-respuesta");
    parrafo.textContent = `Los cursos disponibles son: JS, Ract, Angular`;
    respuesta.appendChild(parrafo);
  } else if (resMin === "dias de cursado") {
    //aprieta btn-dias
    let parrafo = document.createElement("p");
    parrafo.classList.add("contenedor-respuesta");
    parrafo.textContent = `Los días de los cursos son: Lunes, Miércoles y Viernes`;
    respuesta.appendChild(parrafo);
  } else if (resMin === "inscripciones") {
    //aprieta btn-incripciones
    let parrafo = document.createElement("p");
    parrafo.classList.add("contenedor-respuesta");
    parrafo.textContent = `Las incripciones son en Septiembre 2023`;
    respuesta.appendChild(parrafo);
  }
};

mensaje.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let text = mensaje.value;
    let parrafo = document.createElement("p");
    parrafo.classList.add("contenedor-pregunta");
    parrafo.textContent = text;
    pregunta.appendChild(parrafo);
    mensaje.value = "";
    checkMsj(text);
  }
});
