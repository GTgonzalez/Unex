const animition = document.getElementById('animation');

const anim = lottie.loadAnimation({
    container: animition[0],
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animación.json'
});


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
        break;
        case "password":
            document.getElementById('grupo__password').classList.add('form-group-corecto')
            campos['password'] = true;
        break;
    }

}

inputs.forEach((input) =>{
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



