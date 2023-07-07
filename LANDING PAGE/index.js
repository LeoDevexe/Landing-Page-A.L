let boton = document.getElementById("registro");

boton.addEventListener("click", function() {
  alert("Gracias por registrarte");
});

let botonn = document.getElementById("cambiar-contenido");
let titulo = document.querySelector("#contenido h1");
let parrafo = document.querySelector("#contenido p");

boton.addEventListener("click", function() {
  titulo.textContent = "Bienvenido!!";
  parrafo.textContent = "Gracias por suscribirte.";
  boton.textContent =" INICIO DE SESIÓN ";
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  if (nombre === "" || email === "") {
    alert("Por favor complete todos los campos.");
  } else {
    alert("Gracias por enviar el formulario.");
    formulario.reset();
  }
});