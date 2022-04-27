const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log("Imprimiendo el nombre de cada explorer")
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((explorer)=> console.log(explorer.name))

console.log("imprimiendo Stacks de cada explorer")
// Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((explorer)=> console.log(explorer.stack))

console.log("Creando listaStacks con las staks de cada explorer")
// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const listStacks = explorers.map((explorer)=>explorer.stack)
// listStacks.forEach((stack)=>console.log(stack))

console.log("Filtrando explorers con stacks js")
//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stacksjs = explorers.filter((explorer)=>explorer.stack.includes("js"))
stacksjs.forEach((stackjs)=>console.log(stackjs))

console.log("Primer explorer de la CDMX")
//Busca el primer explorer que sea de la CDMX, usa FIND
const exp_CDMX = explorers.find((explorer)=>explorer.city=="CDMX")
console.log(exp_CDMX)

console.log("Suma de todos los excercises_completed")
//Obtén la suma de todos los exercises_completed, usa REDUCE
const suma_excercise = explorers.reduce((suma, explorer) => suma + explorer.exercises_completed, 0)
console.log(suma_excercise)

console.log("Validacion de excercisesFinished")
//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const bool = explorers.some((explorer)=>explorer.exercisesFinished === true)
console.log(bool)

console.log("Validacion de isFInished")
//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const boole = explorers.every((explorer)=>explorer.isFinished === true)
console.log(boole)