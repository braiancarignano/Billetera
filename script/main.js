// Funcion para poder cerrar sesion borrando el array de usuarios. Se que posiblemente no sea la mejor forma
// ya que se me eliminan todos los datos ingresados hasta el momento. Voy a tratar de idear una idea mas 
// eficiente de cerrar sesion sin perder esos datos.
const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", () =>{
localStorage.removeItem("usuarios")
window.location.replace("../index.html")
console.log(cerrarSesion)
})