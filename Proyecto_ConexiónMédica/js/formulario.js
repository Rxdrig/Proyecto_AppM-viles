document.getElementById('formulario').addEventListener('submit', function(e) {
    // DETENER EL FORMULARIO
    e.preventDefault();

    // CAPTURAMOS LOS INPUTS
    const rut = document.getElementById('txtRut')
    const nombre = document.getElementById('txtNombre');
    const apellido = document.getElementById('txtApellido');
    const correo = document.getElementById('txtEmail');
    const fono = document.getElementById('txtFono');
    const fecha = document.getElementById('txtFecha');
    const genero = document.getElementById('cboGenero');

    // BANDERA O AUXILIAR
    let aux = true;

    // rut
    if (!/^\d{1,2}\.?\d{3}\.?\d{3}-\d{1}$/.test(rut.value)) {
        rut.classList.add('is-invalid');
        aux = false;
    } else {
        rut.classList.remove('is-invalid');
    }

    // nombre
    if (!/^[a-zA-Z\s]+$/.test(nombre.value)) {
        nombre.classList.add('is-invalid');
        aux = false;
    } else {
        nombre.classList.remove('is-invalid');
    }

    // Apellido
    if (!/^[a-zA-Z\s]+$/.test(apellido.value)) {
        apellido.classList.add('is-invalid');
        aux = false;
    } else {
        apellido.classList.remove('is-invalid');
    }

    // VALIDAMOS QUE EL CORREO SEA.... @gmail.com
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(correo.value)) {
        correo.classList.add('is-invalid');
        aux = false;
    } else {
        correo.classList.remove('is-invalid');
    }

    // VALIDAMOS QUE SOLO SE INGRESEN NÚMEROS
    if (!/^\d+$/.test(fono.value)) {
        fono.classList.add('is-invalid');
        aux = false;
    } else {
        fono.classList.remove('is-invalid');
    }




    // Si todas las validaciones pasan, guardamos los datos
    if (aux) {
        // CREA OBJETO PARA GUARDAR INFO DEL FORMULARIO
        const persona = {
            rut: rut.value,
            nombre: nombre.value,
            apellido: apellido.value,
            correo: correo.value,
            fono: fono.value,
            fecha: fecha.value,
            genero: genero.value
        };

        // CREAR UNA BD Y SI NO EXISTE SE CREA UN ARREGLO VACÍO
        let basededatos = JSON.parse(localStorage.getItem('registros')) || [];
        // GUARDAMOS LA DATA
        basededatos.push(persona);
        // ACTUALIZAMOS EL LOCALSTORAGE
        localStorage.setItem('registros', JSON.stringify(basededatos));

        Swal.fire({
            title: "Guardado",
            text: "Información almacenada!",
            icon: "success"
        });

        // LIMPIA FORMULARIO
        rut.value = '';
        nombre.value = '';
        apellido.value = '';
        correo.value = '';
        fono.value = '';
        fecha.value = '';
        genero.value = '';
    } else {
        // MUESTRA MENSAJE ERROR
        Swal.fire({
            title: "Error en el formulario",
            text: "Por favor, corrige el formulario!",
            icon: "error"
        });
    }
});
