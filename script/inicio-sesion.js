// Array de objetos donde se almacenan los datos de los usuarios registrados
const usuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];
// Nombrando todos los selectores
const inicioEmail = document.querySelector("#inicioEmail")
const inicioContraseña = document.querySelector("#inicioContraseña")
const registroNombre = document.querySelector("#registroNombre")
const registroApellido = document.querySelector("#registroApellido")
const registroEmail = document.querySelector("#registroEmail")
const registroContraseña = document.querySelector("#registroContraseña")
const btnRegistrateInicio = document.querySelector("#btnRegistrateInicio");
const btnIngresarRegistro = document.querySelector("#btnIngresarRegistro");
const formularioIngreso = document.querySelector(".formularioIngreso");
const formularioRegistro = document.querySelector(".formularioRegistro");
const btnRegistrateRegistro = document.querySelector("#btnRegistrateRegistro");

// Esta funcion hace que mientras exista usuario en el storage no se pueda iniciar sesion en otra cuenta. Hasta que se cierre sesion.
localStorage.getItem("usuarios") &&  window.location.replace("../paginas/main.html");

// Constructor de usuarios
class NuevoUsuario {
    constructor(nombre, apellido, correo, contraseña) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.correo = correo,
            this.contraseña = contraseña
    }
}
// Se crea el usuario y se pushea al Storage
const crearUsuario = () => {
    let newUsuario = new NuevoUsuario(registroNombre.value, registroApellido.value, registroEmail.value, registroContraseña.value);
    usuarios.push(newUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
// Validacion para inicio de sesion, si hay una coincidencia entre un correo y una contraseña lo redirige al sitio
const validarUsuario = () => {
    for(const usuario of usuarios){
        const {correo, contraseña} = usuario

    if (correo === inicioEmail.value && contraseña === inicioContraseña.value){
        window.location.href = "../paginas/main.html";
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Datos Invalidos!',
          })
    }
}
}
//Botones para cambiar contenedor (Inicio Sesion - Registro)
    btnRegistrateInicio.addEventListener("click", (e) =>{
        e.preventDefault()
        formularioIngreso.classList.add('active')
        formularioRegistro.classList.add('active')
    })
    btnIngresarRegistro.addEventListener("click", (e) =>{
        e.preventDefault()
        formularioIngreso.classList.remove('active')
        formularioRegistro.classList.remove('active')
    })
// Boton para crear registro de usuario
formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    crearUsuario();
    formularioIngreso.classList.remove('active')
    formularioRegistro.classList.remove('active')
})
// Evento validacion de usuario
formularioIngreso.addEventListener("submit", (e) => {
    e.preventDefault();
    validarUsuario()
})





