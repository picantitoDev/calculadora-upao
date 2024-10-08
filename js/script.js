function eliminar(button) {
    const componente = button.parentElement.parentElement;
    componente.remove();
}

function subir(button) {
    const componente = button.parentElement.parentElement;
    const anterior = componente.previousElementSibling;

    if (anterior) {
        componente.parentElement.insertBefore(componente, anterior);
    }
}

function bajar(button) {
    const componente = button.parentElement.parentElement;
    const siguiente = componente.nextElementSibling;

    if (siguiente) {
        componente.parentElement.insertBefore(siguiente, componente);
    }
}