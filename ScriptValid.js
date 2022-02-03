const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
    password: /^.{4,12}$/,
    email: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/
}
const campos = {
	password: false,
	email: false,
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case "email":
        if(expresiones.email.test(e.target.value)) {  
            document.getElementById('idForm').classList.remove('form-group-corecto-incorrecto')
            document.getElementById('idForm').classList.add('form-group-corecto')  
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
              })
              campos['email'] = true;
        } else {
            document.getElementById('idForm').classList.add('form-group-corecto-incorrecto')
            document.getElementById('idForm').classList.remove('form-group-corecto') 
            campos['email'] = false;   
        }

    }

}

inputs.forEach((input) =>{
    // Ontenemos los valores de los campos de contraseñas 
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('button', (e) => {
    e.preventDefault();

    if (campos.email  && campos.password ){
        document.getElementById('idForm').classList.remove('form-group-corecto');
        document.getElementById('grupo__password').classList.remove('form-group-corecto');

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        document.getElementById('idForm').classList.add('form-group-corecto-incorrecto')
        document.getElementById('grupo__password').classList.add('form-group-corecto-incorrecto')
    }
});


function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');
 
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar"); 
        return false;                
    }else if (pass1.length > 8)
    this.value = this.value.slice(0,8); 
    else {
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
        // Desabilitamos el botón de login 
        document.getElementById("login").disabled = true;
 
        // envío del formulario 

        return true;
    }
 
}