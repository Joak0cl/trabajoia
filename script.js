let currentIndex = 0;
const parrafos = document.querySelectorAll('.parrafo');
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');

function updateButtons() {
    anteriorBtn.disabled = currentIndex === 0;
    siguienteBtn.disabled = currentIndex === parrafos.length - 1;
}

function mostrarParrafo(index) {
    parrafos.forEach((parrafo, i) => {
        parrafo.classList.toggle('activo', i === index);
    });
    updateButtons();
}

anteriorBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        mostrarParrafo(currentIndex);
    }
});

siguienteBtn.addEventListener('click', () => {
    if (currentIndex < parrafos.length - 1) {
        currentIndex++;
        mostrarParrafo(currentIndex);
    }
});

// Inicialización
mostrarParrafo(currentIndex);
