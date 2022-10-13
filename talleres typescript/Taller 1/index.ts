//++++++++++++++++++ 1. Declare e inicie. +++++++++++++++++++++++++++//

let varLog1 : Boolean = true;
let varLog2 : Boolean = false;

let varNum1 : Number = 1;
let varNum2 : Number = 400;

let varAny1 : any = "any";
let varAny2 : any = 417;

let varStr1 : String = "String 1";
let varStr2 : String = "String 2";


// Template String

let nombre = 'Moises';
let apellido = 'Pineda'
let welcome: String = `Bienvenido/a ${nombre} ${apellido} a nuestro sitio web, gracias por registrarte`;

console.log(welcome);


//++++++++++++++ 2.Declare e inicie (Arreglos) +++++++++++++++++++++//
let numArray = [1,2,3,4,5];
console.log(numArray);

let strArray = ["String", "Otro String", "Cadena pa variar", "Otra Cadena", "Mucho Char"];
console.log(strArray);

for(let element of numArray){
    console.log(`Strings #${element}: ${strArray[element-1]}`);
    console.log(`Numeros #${element}: ${numArray[element-1]}`);
}

//++++++++++++++++ Ejemplos CRUD en Arreglos +++++++++++++++++//

// Por optimización se usará un arreglo para todos los ejemplos //
let Animales =["León", "Jirafa", "Elefante", "Mono"];
console.log(Animales);


// Supongamos que llega un nuevo animal al zoologico, pues usamos el método Array.push() para añadir un nuevo elemento al final del arreglo 
// de esta manera

Animales.push("Gorila"); // De este modo Animales quedaría ["León", "Jirafa", "Elefante", "Mono", "Gorila"]
console.log(Animales);

// Para leer un elemento de un arreglo hay varias maneras, mostraré dos maneras: una para mostrar x elemento
// de un arreglo con console.log() y la otra para recorrerla con el método Array.map() que es más práctico y muy útil; la manera del for of
// está arriba en el ejercicio de inicialización de arreglos

// Para cualquier situación fuera de Array.map(), Array.filter(), Array.find(), etc. Métodos donde no se use el index sino un callback 
// para trabajar sobre el elemento como un valor fuera del arreglo se usa la siguiente sintáxis
// Array[indice del elemento : Int] así

console.log(Animales[0]); // Hay que tener en cuenta que los valores dentro de un arreglo se empieza a contar desde 0
// El valor que mostrará es "León"

// Para el Array.map() se le pasa una función o callback para leer los elementos, en este caso usaré una función de flecha

Animales.map(element => {
    console.log(element);
}); // La salida esperada es exactamente la misma que el ciclo for, pero en este caso solo usamos una función en vez de un contador


// Para actualzar un elemento del Arreglo tan solo vamos al índice y le asiganmos un nuevo valor así

Animales[2] = "";
