// 5. Formularios: Escribe un programa que valide que un formulario tiene todos
// sus campos llenos antes de enviarlo.


    const formulario = document.getElementById('Datosformulario');
    formulario.addEventListener('submit', function(event) {
    

        event.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const carrera = document.getElementById('carrera').value.trim();
        const matricula = document.getElementById('matricula').value.trim();

        if (!nombre || !email || !carrera || !matricula) {
            alert("Faltan campos por completar");
        } else {
            alert("se envio con éxito.");
            formulario.submit(); 
        }
    });

