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
                document.getElementById('toll').classList.add('ocultar')
            } else {
                document.getElementById('f-nombre').classList.add('form-group-corecto-incorrecto')
                document.getElementById('f-nombre').classList.remove('form-group-corecto')
                document.getElementById('toll').classList.remove('ocultar')  
                document.getElementById('textova').classList.remove('ocultar')              
                document.getElementById('textova2').classList.add('ocultar')
                document.getElementById('textova3').classList.add('ocultar')
                document.getElementById('textova4').classList.add('ocultar')
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
            document.getElementById('toll').classList.add('ocultar')
            
        } else {
            document.getElementById('idForm').classList.add('form-group-corecto-incorrecto')
            document.getElementById('idForm').classList.remove('form-group-corecto')
            document.getElementById('button').disabled = true
            document.getElementById('toll').classList.remove('ocultar')
            document.getElementById('textova').classList.add('ocultar')           
            document.getElementById('textova2').classList.remove('ocultar') 
            document.getElementById('textova3').classList.add('ocultar')
            document.getElementById('textova4').classList.add('ocultar')
        }
        break;
        /*Validación de Telefono */
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('toll2').classList.add('ocultar')  
                     
            } else {
                document.getElementById('toll2').classList.remove('ocultar')    
                document.getElementById('textova').classList.add('ocultar')   
                document.getElementById('textova5').classList.add('ocultar')   
                document.getElementById('textova6').classList.remove('ocultar')       
            }
        break; 
        /*Validación de DPI */
        case "dpi":
        if(expresiones.dpi.test(e.target.value)){
            document.getElementById('toll2').classList.add('ocultar')  
                 
        } else {
            document.getElementById('toll2').classList.remove('ocultar')    
            document.getElementById('textova').classList.add('ocultar') 
            document.getElementById('textova6').classList.add('ocultar')   
            document.getElementById('textova5').classList.remove('ocultar')            
        }
        break;         
    }    
}
/*Verificar contraseñas iguales*/
function validarPassword() {
    password = document.getElementById('password')
    password2 = document.getElementById('password2')
   
   if (password.value !== password2.value){
    document.getElementById('f-pass').classList.remove('form-group-corecto') 
    document.getElementById('f-pass').classList.add('form-group-corecto-incorrecto') 
    document.getElementById('f-pass2').classList.remove('form-group-corecto') 
    document.getElementById('f-pass2').classList.add('form-group-corecto-incorrecto') 
    document.getElementById('button').disabled = true
    document.getElementById('toll').classList.remove('ocultar')
    document.getElementById('textova').classList.add('ocultar')
    document.getElementById('textova2').classList.add('ocultar')
    document.getElementById('textova4').classList.add('ocultar')
    document.getElementById('textova3').classList.remove('ocultar')
   } else {
    document.getElementById('f-pass2').classList.remove('form-group-corecto-incorrecto') 
    document.getElementById('f-pass2').classList.add('form-group-corecto') 
    document.getElementById('f-pass').classList.remove('form-group-corecto-incorrecto')
    document.getElementById('f-pass').classList.add('form-group-corecto')
    document.getElementById('button').disabled = false
    document.getElementById('toll').classList.add('ocultar')
   } 
    }
    
/*Selección fuera de campos o dentro de ellos*/
inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {   
    document.getElementById('idForm').classList.remove('form-group-corecto')
    document.getElementById('f-nombre').classList.remove('form-group-corecto')
    document.getElementById('f-pass').classList.remove('form-group-corecto') 
    document.getElementById('f-pass2').classList.remove('form-group-corecto')

    e.preventDefault()
	formulario.reset();
});

/*Lista de municipios*/
var Municipio_1=new Array("Cobán Cabecera","Tactic","Santa Cruz Verapaz","San Juan Chamelco","San Cristóbal Verapaz","San Pedro Carchá","Tamahú","Tucurú","Panzos","Santa María Cahabón","Lanquín","Chisec","Fray Bartolomé de las Casas","Senahú","Santa Catalina la Tinta","Chaal","Raxruhá");
var Municipio_2=new Array("Salamá","Cubulco","Granados","Purulhá","Rabinal","Santa Cruz el Chol","San Jerónimo","San Miguel Chicaj");
var Municipio_3=new Array("Chimaltenango","San José Poaquíl","San Martín Jilotepeque","San Juan Comalapa","Santa Apolonia","Tecpán Guatemala","Patzún","Pochuta","Patzicía","Santa Cruz Balanyá","Acatenango","San Pedro Yepocapa","San Andrés Itzapa","Parramos","Zaragoza","El Tejar");
var Municipio_4=new Array("Chiquimula","Jocotán","Esquipulas","Camotán","Quezaltepeque ","Olopa","Ipala","San Juan Ermita","Concepción Las Minas","San Jacinto","San José la Arada");
var Municipio_5=new Array("El Jícaro","Guastatoya","Morazán","Sanarate","Sansare","San Agustín Acasaguastlán","San Antonio La Paz","San Cristóbal Acasaguastlán");
var Municipio_6=new Array("Ciudad de Las Palmeras ","Guanagazapa","Iztapa","La Democracia","La Gomera","Masagua","Nueva Concepción","Palín","San José","San Vicente Pacaya","Santa Lucía Cotzumalguapa","Sipacate","Siquinalá","Tiquisate");
var Municipio_7=new Array("Guatemala ","Mixco","Villa Nueva","San Juan Sacatepéquez","Villa Canales","Amatitlán","San Miguel Petapa","Chinautla","San José Pinula","Santa Catarina Pinula","Palencia","San Pedro Ayampuc","Fraijanes","San Pedro Sacatepéquez","San Raymundo","Chuarrancho","San José del Golfo");
var Municipio_8=new Array("Aguacatán","Chiantla","Colotenango","Concepción Huista","Cuilco ","Huehuetenango","Jacaltenango","La Democracia","La Libertad","Malacatancito" ,"Nentón","Petatán","San Antonio Huista","San Gaspar Ixchil","Ixtahuacán","San Juan Atitán","San Juan Ixcoy","San Mateo Ixtatán"
                          ,"San Miguel Acatán","San Pedro Necta","San Pedro Soloma","San Rafael La Independencia","San Rafael Petzal","San Sebastián Coatán","San Sebastián Huehuetenango","Santa Ana Huista.","Santa Bárbara","Barillas","Santa Eulalia","Santiago Chimaltenango","Tectitán","Todos Santos Cuchumatán","Unión Cantinil");
var Municipio_9=new Array("Puerto Barrios","El Estor","Livingston","Los Amates","Morales")
var Municipio_10=new Array("Jalapa","Mataquescuintla","Monjas","San Carlos Alzatate","San Luis Jilotepeque","San Pedro Pinula","San Manuel Chaparrón");
var Municipio_11=new Array("Agua Blanca","Asunción Mita","Atescatempa","Comapa","Conguaco","El Adelanto","El Progreso","Jalpatagua","Jerez","Jutiapa","Moyuta","Pasaco","Quesada","San José Acatempa","Santa Catarina Mita","Yupiltepeque","Zapotitlán");
var Municipio_12=new Array("Dolores","Flores","La Libertad","Melchor de Mencos","Poptún ","San Andrés","San Benito","San Francisco","San José","San Luis","Santa Ana","Sayaxché","Las Cruces","El Chal");
var Municipio_13=new Array("Almolonga","Cabricán","Cajolá","Cantel","Coatepeque","Colomba","Concepción Chiquirichapa","El Palmar","Flores Costa Cuca","Génova","Huitán","La Esperanza","Olintepeque","Palestina de Los Altos","Quetzaltenango","Salcajá","San Carlos Sija","San Juan Ostuncalco","San Francisco La Unión"
                           ,"San Martín Sacatepéquez","San Mateo","San Miguel Sigüilá","Sibilia","Zunil");
var Municipio_14=new Array("Canillá","Chajul","Chicamán","Chichicastenango (Santo Tomás Chichicastenango)","Chinique","Cunén","Ixcán","Joyabaj","Nebaj","Pachalum","Patzité","Sacapulas","San Andrés Sajcabajá","San Antonio Ilotenango","San Bartolomé Jocotenango","San Juan Cotzal","San Pedro Jocopilas","Santa Cruz del Quiché","Uspantán","Zacualpa");
var Municipio_15=new Array("Retalhuleu","San Sebastián","Santa Cruz Muluá","San Martín Zapotitlán","San Felipe","San Andrés Villa Seca","Champerico","Nuevo San Carlos","El Asintal");
var Municipio_16=new Array("Alotenango","Antigua Guatemala","Ciudad Vieja","Jocotenango","Magdalena Milpas Altas ","Pastores","San Antonio Aguas Calientes","San Bartolomé Milpas Altas","San Lucas Sacatepéquez","San Miguel Dueñas","Santa Catarina Barahona","Santa Lucía Milpas Altas","Santa María de Jesús","Santiago Sacatepéquez","Santo Domingo Xenacoj","Sumpango");
var Municipio_17=new Array("San Marcos","Ayutla","Catarina","Comitancillo","Concepción Tutuapa","El Quetzal","El Rodeo","El Tumbador","Ixchiguán","La Reforma","Malacatán","Nuevo Progreso","Ocós","Pajapita","Esquipulas Palo Gordo","San Antonio Sacatepéquez","San Cristóbal Cucho","San José Ojetenam","San Lorenzo","San Miguel Ixtahuacán","San Pablo","San Pedro Sacatepéquez",
                            "San Rafael Pie de la Cuesta","Sibinal","Sipacapa","Tacaná","Tajumulco","Tejutla","Río Blanco","La Blanca");
var Municipio_18=new Array("Barberena","Casillas","Chiquimulilla","Cuilapa","Guazacapán","Monterrico","Nueva Santa Rosa","Oratorio","Pueblo Nuevo Viñas","San Juan Tecuaco","San Rafael Las Flores","Santa Cruz Naranjo","Santa María Ixhuatán","Santa Rosa de Lima","Taxisco");
var Municipio_19=new Array("Sololá","Concepción","Nahualá","Panajachel","San Andrés Semetabaj ","San Antonio Palopó","San José Chacayá","San Juan La Laguna","San Lucas Tolimán","San Marcos La Laguna","San Pablo La Laguna","San Pedro La Laguna","Santa Catarina Ixtahuacán","Santa Catarina Palopó","Santa Clara La Laguna","Santa Cruz La Laguna","Santa Lucía Utatlán","Santa María Visitación","Santiago Atitlán");
var Municipio_20=new Array("Chicacao","Cuyotenango","Mazatenango","Patulul","Pueblo Nuevo","Río Bravo","Samayac","San Antonio Suchitepéquez","San Bernardino","San Francisco Zapotitlán","San Gabriel","San José El Ídolo","San José La Máquina","San Juan Bautista","San Lorenzo","San Miguel Panán","San Pablo Jocopilas","Santa Bárbara","Santo Domingo Suchitepéquez","Santo Tomás La Unión","Zunilito");
var Municipio_21=new Array("Momostenango","San Andrés Xecul","San Bartolo","San Cristóbal Totonicapán","San Francisco El Alto","Santa Lucía La Reforma","Santa María Chiquimula","Totonicapán");
var Municipio_22=new Array("Cabañas","Estanzuela","Gualán","Huité","La Unión","Río Hondo","San Diego","San Jorge","Teculután","Usumatlán","Zacapa");

var todos_municipio = [
    [],
    Municipio_1,
    Municipio_2,
    Municipio_3,
    Municipio_4,  
    Municipio_5,
    Municipio_6,
    Municipio_7,
    Municipio_8,
    Municipio_9,  
    Municipio_10,
    Municipio_11,
    Municipio_12,
    Municipio_13,
    Municipio_14,  
    Municipio_15,
    Municipio_16,
    Municipio_17,
    Municipio_18,
    Municipio_19,  
    Municipio_20,
    Municipio_21,
    Municipio_22,
];

function cambio_municipio(){ 
    //tomo el valor del select del pais elegido 
    var Departamento 
    Departamento = document.f1.Departamentos[document.f1.Departamentos.selectedIndex].value;
    //miro a ver si el pais está definido 
    if (Departamento != 0) { 
       //si estaba definido, entonces coloco las opciones de la provincia correspondiente. 
       //selecciono el array de provincia adecuado 
       mis_municipios=todos_municipio[Departamento] 
       //calculo el numero de provincias 
       num_municipios = mis_municipios.length 
       //marco el número de provincias en el select 
       document.f1.Municipios.length = num_municipios
       //para cada provincia del array, la introduzco en el select 
       for(i=0;i<num_municipios;i++){ 
          document.f1.Municipios.options[i].value=mis_municipios[i] 
          document.f1.Municipios.options[i].text=mis_municipios[i] 
       }	
    }else{ 
       //si no había provincia seleccionada, elimino las provincias del select 
       document.f1.Municipios.length = 1 
       //coloco un guión en la única opción que he dejado 
       document.f1.Municipios.options[0].value = "-" 
       document.f1.Municipios.options[0].text = "-" 
    } 
    //marco como seleccionada la opción primera de provincia 
    document.f1.Municipios.options[0].selected = true 
}