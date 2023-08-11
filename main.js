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
const mensaje = document.querySelector("#mensaje")
const pregunta = document.querySelector("#pregunta")
const btnEnviar = document.querySelector("#btn-enviar")

btnEnviar.addEventListener("click", e => {
  let text = mensaje.value
  let parrafo = document.createElement("p")
parrafo.textContent = text
pregunta.appendChild(parrafo)
mensaje.value = " "

})

