document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const carreras = [
        { nombre: 'Tecnicatura Superior en Análisis de Sistemas', descripcion: 'Descubre el fascinante mundo de la informática y la programación. Esta carrera te proporcionará las habilidades necesarias para analizar, diseñar y desarrollar sistemas de software.', documento: 'AnalistaSistemas.pdf' },
        { nombre: 'Tecnicatura Superior en Gestión Ambiental', descripcion: 'Contribuye al cuidado del medio ambiente con esta carrera centrada en la gestión sostenible. Aprenderás a evaluar impactos ambientales, implementar políticas de conservación y promover prácticas eco-amigables.', documento: 'GestionAmbiental.pdf' },
        { nombre: 'Tecnicatura Superior en Emergencias de Salud', descripcion: 'Prepárate para situaciones críticas en el ámbito de la salud. Adquirirás conocimientos y habilidades para responder eficazmente en situaciones de emergencia médica y catástrofes.', documento: 'Emergencia.pdf' },
        { nombre: 'Tecnicatura Superior en Logística', descripcion: 'Conviértete en un experto en la gestión eficiente de la cadena de suministro. Aprenderás a planificar, coordinar y controlar el flujo de bienes y servicios, optimizando los procesos logísticos.', documento: 'Logistica.pdf' },
        { nombre: 'Tecnicatura Superior en Turismo', descripcion: 'Descubre el emocionante mundo del turismo y la hospitalidad. Esta carrera te brindará las herramientas para planificar y organizar experiencias inolvidables para los viajeros.', documento: 'Turismo.pdf' },
        { nombre: 'Tecnicatura Superior en Acompañamiento Terapéutico', descripcion: 'Enfócate en la atención y apoyo personalizado a personas con discapacidades o necesidades especiales. Aprenderás a facilitar su participación activa en la sociedad y mejorar su calidad de vida.', documento: 'AcompanamientoTerapeutico.pdf' },
        { nombre: 'Tecnicatura Superior en Textil e Indumentaria', descripcion: 'Sumérgete en la creatividad y el diseño de prendas de vestir. Esta carrera te permitirá explorar el mundo de la moda, desde la conceptualización hasta la confección de prendas únicas y vanguardistas.', documento: 'TextilEIndumentaria.pdf' }
    ];

    const carrerasList = document.createElement('ul');

    carreras.forEach(carrera => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${carrera.nombre}</strong>
            <p>${carrera.descripcion}</p>
            <a href="${carrera.documento}" target="_blank">Formulario de Inscripción </a>
        `;
        carrerasList.appendChild(listItem);
    });

    mainContent.appendChild(carrerasList);
});
