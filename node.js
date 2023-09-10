const suma = (a, b) => {
    return a + b;
}

console.log(suma(3, 5))

let frutas = ["manzana", "banana", "pera"]

console.log(frutas) //se imprime la lista completa
console.log(frutas[0]) //se imprime el elemento 0, en este caso manzana
frutas[2] = "ciruela"
console.log(frutas) //imprime la lista, pero modifica pera por ciruela
console.log(frutas.length)//Nos da la longitud de los elementos del array, 3.  
frutas.push("Naranja")//Agrega al funal del array un elemento
console.log(frutas)
frutas.pop()//Remueve el último elemento del arreglo
console.log(frutas)
frutas.shift("Naranja")//Agrega un elemento al principio del array
console.log(frutas)
frutas.unshift() //Elimina el elemento cero
console.log(frutas)
frutas.forEach(fruta => console.log(fruta));//Permite recorrer uno por uno los elementos del arreglo                        
const mensaje = frutas.map(fruta => {
    return "Me gusta comer " + fruta
})
console.log(mensaje)// retorna un nuevo array con elementos que dice "ME gusta comer + nombre de la fruta"


const resto = frutas.splice(2, 1, "Limon", "Kiwi");

console.log(frutas)
console.log(resto)


let array1 = [1, 2, 3];
//let array2 = array1;    //cualquier cambio en array1 va a afectar a array2
console.log(array1)
//console.log(array2)
let array2 = array1.slice();
array2[0] = 4;
console.log(array1)
console.log(array2)