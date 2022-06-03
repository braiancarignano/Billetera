// const anio = 2022
// let edad = Number(prompt("En que año naciste?"));
// if (anio - edad < 18) 
// {      alert ("eres muy joven, tienes una vida por delante")
// } 
//  else if (anio - edad < 25) 
//  {      alert ("que joven eres")
//  } 
//  else if (anio - edad < 55) 
//  {      alert ("que grande estas")
//  } 
//  else 
// {      alert ("que bueno que sigas jugando")
//  }      


/*
    - Calcular el promedio de un estudiante

    1. Usar un ciclo para recibir 5 números y dar una respuesta según el valor dado.
      0 = Muy Malo
      1 - 4 = Malo
      5 - 7 = Aceptable
      8 - 9 = Bueno
      10 = Excelente
      Otro Valor = No has ingresado un valor válido

    2. Se deben sumar los valores y al final calcular el promedio
*/
/*
switch (true) {
    case edadUsuario <= 18:  // true === edadUsuario <= 18
      alert(prefijo + ' tienes toda una vida por delante');
      break;
    case edadUsuario > 18 && edadUsuario <= 35:
      alert(prefijo + ' que grande que estás');
      break;
    case edadUsuario > 35 && edadUsuario <= 65:
      alert(prefijo + ' estás muy grande para andar con jueguitos.');
      break;
    default:
      alert(prefijo + ' que bueno que puedas dedicar tiempo a jugar');
      break;
  }
*/

function imprimirAlert(mensaje) {
  alert(mensaje);
}
function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
      case "+":
          return primerNumero + segundoNumero;
      case "-":
          return primerNumero - segundoNumero;
      case "*":
          return primerNumero * segundoNumero;
      case "/":
          return primerNumero / segundoNumero;
      default:
          return 0;
  }
}

function operacionConUsuario() {
  let operador = prompt("Que tipo de operación quieres hacer?");
  let num1 = Number(prompt("Ingresa el primer número"));
  let num2 = Number(prompt("Ingresa el segundo número"));
  imprimirAlert(`El resultado de la operación es ${calculadora(num1, num2, operador)}`);
}

operacionConUsuario();
