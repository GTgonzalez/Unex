/*Restricciones de campos*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
    name:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    password2:/^.{4,12}$/,
    email: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
    telefono: /^\d{8,8}$/ ,
    dpi: /^\d{13,13}$/ 
}
/*Variables*/
const campos = {
    name: false,
	password: false,
    password2: false,
	email: false,
    telefono: false,
    dpi: false    
}

/*Validación de Login / Registro*/
const validarFormulario = (e) => {
    switch (e.target.name){
        /*Validación de Nombre y apellido*/
        case "name":
            if(expresiones.name.test(e.target.value)){
                document.getElementById('f-nombre').classList.remove('form-group-corecto-incorrecto')
                document.getElementById('f-nombre').classList.add('form-group-corecto') 
                document.getElementById("button").disabled = false;
                document.getElementById('toll').classList.add('ocultar')
            } else {
                document.getElementById('f-nombre').classList.add('form-group-corecto-incorrecto')
                document.getElementById('f-nombre').classList.remove('form-group-corecto')
                document.getElementById("button").disabled = true;
                document.getElementById('toll').classList.remove('ocultar')
                document.getElementById("textova").value = ('¡El usuario no admite simbolos ni numeros!')
            }
        break;
        /*Validación de Password */
        case "password":
            validarPassword();
        break;
        /*Validación de Password */
        case "password2":
            validarPassword();
        break;                     
        /*Validación de email*/
        case "email":
        if(expresiones.email.test(e.target.value)) {  
            document.getElementById('idForm').classList.remove('form-group-corecto-incorrecto')
            document.getElementById('idForm').classList.add('form-group-corecto')
            document.getElementById('button').disabled = false
            
        } else {
            document.getElementById('idForm').classList.add('form-group-corecto-incorrecto')
            document.getElementById('idForm').classList.remove('form-group-corecto')
            document.getElementById('button').disabled = true
        }
        break;
        /*Validación de Telefono */
        case "telefono":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('f-tel').classList.remove('form-group-corecto-incorrecto')
            document.getElementById('f-tel').classList.add('form-group-corecto')            
        } else {
            document.getElementById('f-tel').classList.add('form-group-corecto')    
            document.getElementById('f-tel').classList.remove('form-group-corecto-incorrecto')
        }
        break; 
        /*Validación de DPI */
        case "dpi":
        break;         
    }    
}
/*Verificar contraseñas iguales*/
function validarPassword() {
    password = document.getElementById('password')
    password2 = document.getElementById('password2')
   
   if (password.value != password2.value){
       document.getElementById('f-pass').classList.remove('form-group-corecto') 
       document.getElementById('f-pass').classList.add('form-group-corecto-incorrecto') 
       document.getElementById('f-pass2').classList.remove('form-group-corecto') 
       document.getElementById('f-pass2').classList.add('form-group-corecto-incorrecto') 
       document.getElementById('button').disabled = true
   } else {
       document.getElementById('f-pass2').classList.remove('form-group-corecto-incorrecto') 
       document.getElementById('f-pass2').classList.add('form-group-corecto') 
       document.getElementById('f-pass').classList.remove('form-group-corecto-incorrecto')
       document.getElementById('f-pass').classList.add('form-group-corecto')
       document.getElementById('button').disabled = false
   }
}

/*Selección fuera de campos o dentro de ellos*/
inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
/*No enviar informacion en URL*/
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