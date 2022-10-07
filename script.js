// 1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están en posiciones impares.
// array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]
const arr = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"];
let impares = arr.filter(palabra => { return arr.indexOf(palabra) % 2 == 0 });
console.log(impares);
let resultado = [];
resultado = impares.map((palabra) => { (palabra.includes("t") || palabra.includes("a")) ? resultado.push(palabra) : false });
console.log(resultado);
// El resultado es undefined, por lo que estoy haciendo algo mal

// 2. Disponemos del siguiente JSON:
// "Empleados": [
//     { "Nombre": "John", "Apellido": "Doe" },
//     { "Nombre": "Anna", "Apellido": "Smith" },
//     { "Nombre": "Pedro", "Apellido": "Jones" }
// ]
// Permite por medio de un formulario que el usuario pueda insertar empleados y cambiar su nombre, apellido o ambos.
let empleados = [
    { 'Nombre': 'John', 'Apellido': 'Doe' },
    { 'Nombre': 'Anna', 'Apellido': 'Smith' },
    { 'Nombre': 'Pedro', 'Apellido': 'Jones' }
]
localStorage.setItem('empleado', JSON.stringify(empleados));
function almacenarDatos() {
    let datosStorage = JSON.parse(localStorage.getItem('empleado'));
    let newEmpleado = {
        'Nombre': document.getElementById('nombre').value,
        'Apellido': document.getElementById('apellido').value
    }
    Object.assign(datosStorage, newEmpleado);
    localStorage.setItem('empleado', JSON.stringify(data));
}
console.log(localStorage.getItem('empleado'))
// Me dice "use strict";"object"==typeof