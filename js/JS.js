//  Esta función agrega un nuevo elemento <li> a una lista <ul> con el texto que el usuario escribe.
// Verifica que el campo no esté vacío, muestra una alerta si lo está, y luego agrega el texto como nuevo .

  function agregarElemento() {
    const input = document.getElementById("inputTexto");
    const texto = input.value.trim();
    if (texto === "") {
      alert("Por favor, escribe algo antes de agregarlo.");
      input.focus();
      return;
    }
    const li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("lista").appendChild(li);
    input.value = "";
  }
  document.querySelector("form").addEventListener("reset", function () {
    document.getElementById("lista").innerHTML = "";
  });

// Esta parte espera a que el documento HTML esté completamente cargado.
// Luego, encuentra el campo de nombre y actualiza el saludo en tiempo real con el nombre que el usuario escribe.
// Si el campo está vacío, muestra un mensaje genérico de bienvenida.
document.addEventListener('DOMContentLoaded', () => {
  const inputNombre = document.getElementById('nombre');
  const saludo = document.getElementById('saludo');

  if (inputNombre && saludo) {
    inputNombre.addEventListener('input', () => {
      const nombre = inputNombre.value.trim();
      saludo.textContent = nombre
        ? `¡Hola ${nombre}! Gracias por registrarte `
        : '¡Bienvenido a este mundo del arte!';
    });
  }

});
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue o redirija
    
    // Aquí puedes hacer lo que quieras con los datos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const opcion = document.getElementById("opcion").value;

    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    console.log("Opción:", opcion);

    alert("¡Formulario enviado sin recargar la página!");
  });
});

