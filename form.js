


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    apellidos: false,
    ciudad: false,
    asunto: false,
    consulta: false,
    telefono: false,
    email: false,
    instagram: false
}

const validarFormulario = (e) => {
   switch(e.target.name){
    case "nombre":
       validarcampo(expresiones.nombre, e.target, 'nombre');
    break;
    case "apellidos":
        validarcampo(expresiones.nombre, e.target, 'apellidos');
    break;
    case "ciudad":
        validarcampo(expresiones.nombre, e.target, 'ciudad');
    break;
    case "asunto":
        validarcampo(expresiones.nombre, e.target, 'asunto');
    break;
    case "consulta":
        validarcampo(expresiones.nombre, e.target, 'consulta');
    break;
    case "telefono":
        validarcampo(expresiones.telefono, e.target, 'telefono');
    break;
    case "email":
        validarcampo(expresiones.correo, e.target, 'email');
    break;
    case "instagram":
        validarcampo(expresiones.nombre, e.target, 'instagram');
    break;
   };
}

const validarcampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const terminos = document.getElementById('terminos');
   
    if(campos.nombre && campos.apellidos && campos.ciudad && campos.asunto && campos.consulta && campos.telefono && campos.email && campos.instagram && terminos.checked){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
            icono.classList.remove('formulario__grupo-correcto')
        });
    } else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});