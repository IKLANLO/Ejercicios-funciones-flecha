// FUNCIONES FLECHA

const saludar = () => {
    return 'hola'
}
console.log(saludar());

const division = (a,b) => a / b
console.log(division(10, 2)); 

const miNombre = (nombre) => `Mi nombre es ${nombre}`
console.log(miNombre('Iker'));

const test2 = () => console.log('Función test 2 ejecutada.');
const test1 = (callback) => callback()
test1(test2) //aquí he añadido test2 como argumento para poder hacer el callback a ella

// FOREACH

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

const mayoresDe25 = gente.filter(persona => persona.edad > 25)
console.log(mayoresDe25);

const empiezanPorJ = gente.filter(persona => persona.nombre[0] === 'J')
console.log(empiezanPorJ);

// MAP

// const mayoresDe25Map = gente.map(persona => persona > 25).filter((persona) => typeof persona === 'undefined')
// console.log(mayoresDe25Map);



const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const numbersElevated = numbers.map(number => number**number)
console.log(numbersElevated);

// FILTER

const numbersImpares = numbers.filter((number) => number % 2 === 0)
console.log(numbersImpares);

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];
const veganFoods = foodList.filter(food => food.isVeggie === true)
console.log(veganFoods);

// REDUCE

const numeros = [39, 2, 4, 25, 62];
const numerosMultiplicados = numeros.reduce((num1, num2) => num1 * num2)
console.log(numerosMultiplicados);

// EXTRAS

const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];
const arrFrases = staff.map(person => `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`)
console.log(arrFrases);

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
