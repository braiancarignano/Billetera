/*Ejercicio probando If-Else y Switch con un ciclo que registra gastos y presupuesto.
para probar el If-Else descomentar y comentar el otro codigo*/

// ------------------------------Ejemplo con If_Else---------------------------------------

// let presupuesto = Number(prompt("Ingresa cuanto dinero tienes"))
// do {
//   let gasto = Number(prompt("Ingresa cuanto gastaste")) ;
//   presupuesto = presupuesto - gasto;
//   if (presupuesto > 15000) {
//     alert("Todavia te queda presupuesto")
//   }
//   else if (presupuesto > 10000) {
//     alert("Ya gastaste gran parte de tu presupuesto, deberias tener mas cuidado...")
//   }
//   else if (presupuesto > 2000) {
//     alert("Ya gastaste casi todo tu presupuesto...")
//   }
//   else {
//     }
//     alert(`Te quedan ${presupuesto}`)
// }
// while(presupuesto > 0)

// alert ("Gastaste todo tu saldo de esta presupuesto");


// ----------------------Ejemplo con Switch-------------------------------------------

// let presupuesto = Number(prompt("Ingresa cuanto dinero tienes"))
// if (!Number(presupuesto)){
//   alert("No ingresaste un numero")

// }
// do {
//   let gasto = Number(prompt("Ingresa cuanto gastaste"));
//   if (!Number(gasto)){
//     alert("No ingresaste un numero")}
//   presupuesto = presupuesto - gasto;
//   alert(`Te quedan ${presupuesto}`)
//   switch (true) {
//     case (presupuesto > 15000):
//       alert("Todavia te queda presupuesto")
//       continue
//     case (presupuesto > 10000):
//       alert("Ya gastaste gran parte de tu presupuesto, deberias tener mas cuidado...")
//       continue
//     case (presupuesto > 2000):
//       alert("Ya gastaste casi todo tu presupuesto...")   
//       continue 
//   }
// }
// while(presupuesto > 0)

// alert ("Gastaste todo tu saldo de esta presupuesto");



// ----------------------Ejemplo con Funciones-------------------------------------------
let presupuesto = 0;
let billeteraEfectivo = 0;
let billeteraAhorro = 0;
let billeteraBanco = 0;
let nombreUsuario= prompt("¿Cual es tu nombre?")

const presupuestoUsuario = () => {
  do { 
    do{
    opcion = Number(prompt(`¿A que cuenta deseas realizar una recarga ${nombreUsuario}?
  1- Cuenta "Efectivo"
  2- Cuenta "Ahorros"
  3- Cuenta "Bancos"
  4- Salir
  `))} while (isNaN(opcion))  
  ingreso = Number(prompt("¿Cuanto dinero deseas ingresar?"))
  switch (opcion) {
    case 1 :
      billeteraEfectivo = billeteraEfectivo + ingreso;
      break
    case 2: 
      billeteraAhorro = billeteraAhorro + ingreso;
      break
    case 3:
      billeteraBanco = billeteraBanco + ingreso;
      break
    case 4:
      break
    default: 
    alert ("Dato invalido...")
    break
  }
}   while (isNaN(ingreso)) 
}

const gasto = () => {
  do { 
    do{
    opcion = Number(prompt(`¿En que cuenta realizaste tu gasto ${nombreUsuario}?
  1- Cuenta "Efectivo"
  2- Cuenta "Ahorros"
  3- Cuenta "Bancos"
  4- Salir
  `))} while (isNaN(opcion)) 
  egreso = Number(prompt("¿Cuanto dinero gastaste?"))
  switch (opcion) {
    case 1 :
      billeteraEfectivo = billeteraEfectivo - egreso;
      break
    case 2: 
      billeteraAhorro = billeteraAhorro - egreso;
      break
    case 3:
      billeteraBanco = billeteraBanco - egreso;
      break
    case 4:
    default: 
    alert ("Dato invalido...")
    break
  }
}   while (isNaN(egreso))
}

const consulta = () => {
  let billeteraTotal = billeteraEfectivo + billeteraAhorro + billeteraBanco;
  alert (`Este es el saldo en tus cuentas:
  Cuenta en Efectivo: ${billeteraEfectivo}
  Cuenta en Ahorros: ${billeteraAhorro}
  Cuenta en Bancos: ${billeteraBanco}
  
  /////Cuenta en Total: ${billeteraTotal}/////`)

}

do {
  opciones = Number(prompt(`¿Que deseas hacer ${nombreUsuario}?
  1- Recargar saldo en una billetera.
  2- Registrar gasto.
  3- Consultar saldo en billeteras.
  4- Salir
  `))
  switch (opciones) {
    case 1 :
      presupuestoUsuario()
      break
    case 2: 
      gasto()
      break
    case 3:
      consulta()
      break
    case 4:
      break
    default: 
    alert ("Dato invalido...")
    break
  }
  
} while (opciones !== 4)