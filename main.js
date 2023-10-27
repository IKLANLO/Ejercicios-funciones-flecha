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

const mayoresDe25Map = gente.map(persona => {
  if(persona.edad > 25){
    return persona
  }
}).filter(element => typeof element !== 'undefined')
console.log(mayoresDe25Map);

const empiezanPorJMap = gente.map(persona => {
  if (persona.nombre[0] === 'J'){
    return persona
  }
}).filter(persona => typeof persona !== 'undefined')
console.log(empiezanPorJMap);

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

// .map

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
const foodPhrase = foodList2.map(food => {
  switch (food){
    case 'Pizza':
      food = `Como soy de Italia, amo comer ${food}`
      break
    case 'Ramen':
      food = `Como soy de Japón, amo comer ${food}`
      break
    case 'Paella':
      food = `Como soy de Valencia, amo comer ${food}`
      break
    case 'Entrecot':
      food = `Aunque no como carne, el ${food} es sabroso`
      break
  }
  return food
})
console.log(foodPhrase);

// .filter

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const masDeTrescientos = inventory.filter(element => element.price > 300).map(el => el.name)
console.log(masDeTrescientos);

// .reduce

const sentenceElements = [
  'Me',
  'llamo',
  'Iker',
  'y',    
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
const reducedSentence = sentenceElements.reduce((elem1, elem2) => elem1 + ' ' + elem2)
console.log(reducedSentence);