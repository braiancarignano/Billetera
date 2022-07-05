// Funcion para poder cerrar sesion borrando el dato ingresado al localstorage de "iniciado"
const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", () =>{
localStorage.removeItem("sesion")
window.location.replace("../index.html")
console.log(cerrarSesion)
})
console.log(localStorage)