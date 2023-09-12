// const suma = (a, b) => {
//     return a + b;
// }

// console.log(suma(3, 5))

// let frutas = ["manzana", "banana", "pera"]

// console.log(frutas) //se imprime la lista completa
// console.log(frutas[0]) //se imprime el elemento 0, en este caso manzana
// frutas[2] = "ciruela"
// console.log(frutas) //imprime la lista, pero modifica pera por ciruela
// console.log(frutas.length)//Nos da la longitud de los elementos del array, 3.  
// frutas.push("Naranja")//Agrega al funal del array un elemento
// console.log(frutas)
// frutas.pop()//Remueve el último elemento del arreglo
// console.log(frutas)
// frutas.shift("Naranja")//Agrega un elemento al principio del array
// console.log(frutas)
// frutas.unshift() //Elimina el elemento cero
// console.log(frutas)
// frutas.forEach(fruta => console.log(fruta));//Permite recorrer uno por uno los elementos del arreglo                        
// const mensaje = frutas.map(fruta => {
//     return "Me gusta comer " + fruta
// })
// console.log(mensaje)// retorna un nuevo array con elementos que dice "ME gusta comer + nombre de la fruta"


// const resto = frutas.splice(2, 1, "Limon", "Kiwi");

// console.log(frutas)
// console.log(resto)


// let array1 = [1, 2, 3];
// let array2 = array1;    //cualquier cambio en array1 va a afectar a array2
// console.log(array1)
// console.log(array2)
// let array2 = array1.slice();
// array2[0] = 4;
// console.log(array1)
// console.log(array2)

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// for (let i = 5; i >= 1; i--) {
//     console.log(i)
// }

// let i = 2 //Fuera del while
// while (i <= 5) {
//     console.log(i)
//     i++//esto modifica una variable
// }

// const numeros = [1, 2, 3, 4, 5]
// numeros.forEach(numero => {
//     console.log(numero)
// })

// const texto = "NodeJS"
// for (letra of texto) {
//     console.log(letra)
// }

//Ejemplo de aplicación de bucles

// function clasificaNumeros(numeros) {
//     const pares = [];
//     const impares = [];
//     for (const numero of numeros) {
//         if (numero % 2 === 0) {
//             pares.push(numero);
//         } else {
//             impares.push(numero);
//         }
//     }
//     console.log("Numeros pares: ", pares);
//     console.log("Numeros impares: ", impares);
// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// clasificaNumeros(numeros)

const miGato = {
    nombre: "Mia",
    edad: 2, //Clave: edad, Valor: 3
    color: "Blanco",
    maullar: function () {
        console.log("Miau!")
    }
}
miGato.edad = 10 //Cambio el valor de la propiedad como si fuera una variable
console.log("El nombre de mi gato es: " + miGato.nombre)
console.log("y tiene " + miGato.edad + " años.")

miGato.maullar()


let miNuevoGato = Object.create(miGato)
miNuevoGato.maullar()

console.log(miNuevoGato)

// let keys = Object.keys(miGato)
//console.log(keys)

// for (let i = 0; i < keys.length; i++) {
//     console.log(`La clave es "${keys[i]}" y el valor es "${miGato[keys[i]]}"`)
// }

console.log(miGato.hasOwnProperty('nombre'))
console.log(miGato.hasOwnProperty('maullar'))
console.log(miNuevoGato.hasOwnProperty('maullar'))

console.log(Object.getOwnPropertyNames(miGato))