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

let presupuesto = Number(prompt("Ingresa cuanto dinero tienes"))
if (!Number(presupuesto)){
  alert("No ingresaste un numero")

}
do {
  let gasto = Number(prompt("Ingresa cuanto gastaste"));
  if (!Number(gasto)){
    alert("No ingresaste un numero")}
  presupuesto = presupuesto - gasto;
  alert(`Te quedan ${presupuesto}`)
  switch (true) {
    case (presupuesto > 15000):
      alert("Todavia te queda presupuesto")
      continue
    case (presupuesto > 10000):
      alert("Ya gastaste gran parte de tu presupuesto, deberias tener mas cuidado...")
      continue
    case (presupuesto > 2000):
      alert("Ya gastaste casi todo tu presupuesto...")   
      continue 
  }
}
while(presupuesto > 0)

alert ("Gastaste todo tu saldo de esta presupuesto");
