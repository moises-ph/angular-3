//***+++++++++++++++++++++++++++++++++++++++++ Funciones +++++++++++++++++++++++++++++++++++++++++ ****/

//** 1. Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de
//** tipo number. Haga el llamado a la función.

function is_bool(number1: number, text: string= "Es verdadero?", hay?: boolean): string{
    if(hay){
        return text + ": Si, y nos llegó " + number1
    }
    else{
        return text + ": No, pero hay " + number1
    }
};

let resultado: string = is_bool(10 , "Hay booleano?", false);
console.log(resultado);

//** 2.Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el
//** llamado a la función 

let suma = (num1: number, num2: number):number => {
    return num1 + num2
};

console.log(suma(2,4));


//** 3.Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el
//** mensaje “HOLA ADSI” 

setTimeout((): void=>{
    console.log("HOLA ADSI");
}, 5000);

//** Cree una función flecha sin argumentos que imprima “Hola ADSI”.

let hola = ():void =>{
    console.log("Hola ADSI");
}

hola();


//** 4.Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
//** fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
//** parámetro y omita la palabra reservada return.

let edad = (age: number):string => `Su edad es ${age}`;

let myage : string = edad(17);

console.log(myage);


//** 5.Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
//** imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
//** reservada return.

let times = (fact1: number, fact2: number):number => fact1 * fact2;

let mytimes = times(6,19);

console.log(mytimes);


//** Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
//** el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice
//** la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable
//** módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones.

let mod = (div1: number, div2: number):number =>{
    let modulo = div1 % div2;
    return modulo;
};

let mymod = mod(5,9);

console.log(mymod);



//** +++++++++++++++++++++++++++ DESESTRUCTURACIÓN DE OBJETOS +++++++++++++++++++++++++++ */

//** Ejemplo 1 */

const user = {
    username: "Moises Pineda",
    useridentifier : "@moispineda",
    email: "mois.mp8@gmail.com",
    gender : "Male"
}

//* Para desestructurar este objecto se debe conocer qué propiedades tiene (claves) en el órden, la desestructuración consiste en encapsular
//* cada valor del objeto en una variable normal e independiente por fuera del objeto con el nombre de su clave o propiedad

let {username, useridentifier, email, gender} = user;

//** De este modo cada propiedad del objeto `user` se puede usar de una manera independiente, (también se puede seleccionar propiedades en específico, no obligatoriamente tienen
//** que ser todas las del objeto) 

//** Ejemplo 2 */

const frameworks = {
    react: true,
    vue: true,
    angular: false,
    next: true,
    astro: true
}

let {react, vue, next, astro} = frameworks;