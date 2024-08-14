/*let numeros = [1, 2, 3, 4, 5]

//console.log(numeros);

let numeroAleatorio = Math.random();
//console.log(numeroAleatorio);

function tirarNumeros() {
    if (numeros != numeroAleatorio) {
        return console.log("Mal");
    }
}


console.log(tirarNumeros());


// Crear un objeto con más datos y múltiples personas
const miObjeto = {
    personas: [
      {
        nombre: 'Juan',
        edad: 30,
        trabajo: 'Desarrollador',
        ciudad: 'Montevideo',
        hobbies: ['Leer', 'Cocinar', 'Viajar']
      },
      {
        nombre: 'María',
        edad: 28,
        trabajo: 'Diseñadora',
        ciudad: 'Buenos Aires',
        hobbies: ['Pintar', 'Bailar', 'Jardinería']
      },
      {
        nombre: 'Pedro',
        edad: 35,
        trabajo: 'Ingeniero',
        ciudad: 'Santiago',
        hobbies: ['Correr', 'Tocar guitarra', 'Fotografía']
      }
    ]
  };
  
  // Acceder a los valores de las personas
  console.log(miObjeto.personas[0].nombre); // Imprime 'Juan'
  console.log(miObjeto.personas[1].ciudad); // Imprime 'Buenos Aires'
  console.log(miObjeto.personas[2].hobbies); // Imprime ['Correr', 'Tocar guitarra', 'Fotografía']
  */
/*
let array = [1, 2, 3, 4, 5];
console.log(array);

array.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});
*/
//let agregarDato= array.push(6);
//Push agregar elemento.
//Pop eliminar un elemento.
//unshift agregar un elemento al principio del Array.
//Shift eliminiar el primer elemento del Array.

// Solicitar al usuario que ingrese el número n

//let n = parseInt(prompt("Ingrese el número n:"));

// Validar si n es un número válido
/*
if (isNaN(n) || n <= 0) {
    console.log("Por favor, ingrese un número válido y mayor que cero.");
} else {
    let mayor = Number.MIN_SAFE_INTEGER; // Inicializar el mayor como el menor número posible
    let suma = 0;

    // Pedir al usuario que ingrese n números
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));

        // Actualizar el mayor si se encuentra un número mayor
        if (numero > mayor) {
            mayor = numero;
        }

        // Sumar el número actual a la suma total
        suma += numero;
    }

    console.log("El mayor número es: " + mayor);
    console.log("La suma de todos los números hasta el mayor es: " + suma);
}
*/

// Coeficientes del polinomio de segundo grado: ax^2 + bx + c = 0
/*
var a = 1; // Ejemplo: x^2
var b = 5; // Ejemplo: + 5x
var c = 6; // Ejemplo: + 6

// Calcula el discriminante
var discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
    // Dos raíces reales y distintas
    var raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    var raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log("Las raíces son reales y diferentes: " + raiz1 + ", " + raiz2);
} else if (discriminante === 0) {
    // Una raíz real doble
    var raiz = -b / (2 * a);
    console.log("Hay una raíz real doble: " + raiz);
} else {
    // Raíces complejas
    var parteReal = -b / (2 * a);
    var parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
    console.log("Las raíces son complejas y conjugadas: " + parteReal + " + " + parteImaginaria + "i, " + parteReal + " - " + parteImaginaria + "i");
}
*/