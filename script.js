document.addEventListener("DOMContentLoaded", function () {
    const carreras = [
        {
            nombre: "Tecnicatura Superior en Análisis de Sistemas",
            descripcion: "Descripción de la carrera de Análisis de Sistemas."
        },
        {
            nombre: "Tecnicatura Superior en Gestión Ambiental",
            descripcion: "Descripción de la carrera de Gestión Ambiental."
        },
        {
            nombre: "Tecnicatura Superior en Emergencias de Salud",
            descripcion: "Descripción de la carrera de Emergencias de Salud."
        },
        {
            nombre: "Tecnicatura Superior en Logística",
            descripcion: "Descripción de la carrera de Logística."
        },
        {
            nombre: "Tecnicatura Superior en Turismo",
            descripcion: "Descripción de la carrera de Turismo."
        }
    ];

    const descripcionCarrera = document.getElementById("descripcion-carrera");

    document.querySelectorAll("#carreras a").forEach((enlace) => {
        enlace.addEventListener("click", function (event) {
            event.preventDefault();
            const carreraSeleccionada = event.target.getAttribute("data-carrera");
            const descripcion = carreras.find((carrera) => carrera.nombre === carreraSeleccionada).descripcion;
            descripcionCarrera.innerHTML = `<h3>${carreraSeleccionada}</h3><p>${descripcion}</p>`;
        });
    });
});
