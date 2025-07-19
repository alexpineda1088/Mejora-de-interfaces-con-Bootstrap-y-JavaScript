// Validación básica del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (nombre && correo && mensaje) {
      alert("Gracias por contactarnos, " + nombre + ". Te responderemos pronto.");
      this.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
  