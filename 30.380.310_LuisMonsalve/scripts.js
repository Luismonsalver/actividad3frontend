function redireccionar() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
      event.preventDefault();
      window.location.href = "index.html";
    });
  }