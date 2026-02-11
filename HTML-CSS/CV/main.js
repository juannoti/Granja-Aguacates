// Función que rellena las barras
function llenar() {
    document.querySelectorAll('.barra-nivel').forEach(barra => {
        barra.style.width = barra.getAttribute('data-nivel');
    });
}

// Al hacer scroll se rellenan
window.onscroll = llenar;

// Al pulsar el botón: vaciamos y esperamos un instante para rellenar
document.querySelector('.boton-reinicio').onclick = function () {
    document.querySelectorAll('.barra-nivel').forEach(barra => barra.style.width = "0");
    setTimeout(llenar, 2000);
};
