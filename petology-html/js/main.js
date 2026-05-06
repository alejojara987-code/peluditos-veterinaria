function mostrarMensaje() {
    // Cambia el texto del párrafo
    document.querySelector(".slider_detail-box p").innerText =
        "Cita agendada correctamente";

    // Cambia SOLO el botón que se presionó
    event.target.innerText = "Agendado ✔";
}
