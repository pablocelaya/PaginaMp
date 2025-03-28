const carruselImagenes = document.querySelector('.carrusel-imagenes');
const anteriorBtn = document.querySelector('.anterior');
const siguienteBtn = document.querySelector('.siguiente');
let indice = 0;

// Función para mover el carrusel
function moverCarrusel(direccion) {
    if (direccion === 'siguiente') {
        indice = (indice + 1) % 3; // 3 es el número de imágenes
    } else if (direccion === 'anterior') {
        indice = (indice - 1 + 3) % 3; // 3 es el número de imágenes
    }
    const desplazamiento = -indice * 100;
    carruselImagenes.style.transform = `translateX(${desplazamiento}%)`;
}

// Eventos para los botones
anteriorBtn.addEventListener('click', () => moverCarrusel('anterior'));
siguienteBtn.addEventListener('click', () => moverCarrusel('siguiente'));

// Cambiar automáticamente las imágenes cada 5 segundos
setInterval(() => moverCarrusel('siguiente'), 5000);