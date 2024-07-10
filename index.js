// script.js

// Obtener elementos del DOM
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const corazon = document.getElementById("corazon");
const boton = document.getElementById("boton");

// Función para cambiar el texto del título
function cambiarTitulo() {
    titulo.textContent = "¡Feliz aniversario de novios!";
}

// Función para cambiar el mensaje
function cambiarMensaje() {
    mensaje.textContent = "Espero que disfruten de este día juntos.";
}

// Función para hacer aparecer el corazón
function mostrarCorazon() {
    corazon.style.display = "block";
}

// Función para sorprender
function sorprender() {
    cambiarTitulo();
    cambiarMensaje();
    mostrarCorazon();
}

// Agregar evento al botón
boton.addEventListener("click", sorprender);