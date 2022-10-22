// ** +++++++++++++++++++++++++++++++++++++++++++++++++++++ PROMESAS +++++++++++++++++++++++++++++++++++++++++++++++++++++ ** //

//** 1. Cree y ejecute una promesa que siempre se resuelva, y que lo haga con un string “Somos
//** programadores, hacemos mover el mundo”, de tal manera que en su .then, se imprima tal string mediante
//** console.log

const world = new Promise(resolve=>{
    const message:string = "Somos programadores, hacemos mover el mundo";
    resolve(message);
}).then(msg =>  console.log(msg));

//** 2.Cree y ejecute una promesa que siempre se rechace, y que lo haga con un string “Ha ocurrido un error
//** desconocido.”, de tal manera que en su .catch, se imprima tal string mediante console.log 

const rej_err = new Promise((resolve, reject)=>{
    reject("Ha ocurrido un error desconocido")
}).catch(err => console.log(err)); 



//* Ejercicio 3 en archivo externo *//

import Subsidio from './subsidios'

Subsidio(5).then(res => console.log(res)).catch(err => console.log(err));

//** 4.Cree una promesa que implemente 4 métodos .then en cadena de tal manera que la promesa se
//** resuelva inicialmente con el valor 2 <resolve(2)> y los siguientes métodos .then eleven al
//** cuadrado el valor pasado, imprimiendo al final el mensaje “el valor final es: X” donde x es el
//** resultado final del encadenamiento

const cuadrado = new Promise((resolve, reject)=>{
    resolve(2);
}).then(res => Number(res)**2).then(res2 => Number(res2)**2).then(res3=> Number(res3)**2).then(res4 => {res4 = Number(res4)**2; console.log(res4)});


//** 5.Cree tres promesas promesa1, promesa2 y promesa3, de tal manera que la promesa1 siempre
//** se resuelva con la cadena “Somos ADSI”, que la promesa2 tenga dos opciones, resolverse o
//** rechazarse; de tal forma que si se resuelva lo haga con la cadena “ Somos programadores” ,
//** pero si se rechaza lo haga lanzando un error “Promesa 2 no cumplida” (use una variable y un
//** condicional doble para controlar la resolución o rechazo de la promesa, p.e. una variable estado,
//** velocidad, edad etc). Por último, la promesa3 siempre se debe resolver con la cadena “,
//** Hacemos mover el mundo”. Encadene las promesas de tal manera que cuando la promesa1 se
//** cumpla, imprima desde su .then el mensaje con el que se resolvió y retorne la promesa2 y
//** cuando ésta última se cumpla, imprima desde su .then el mensaje con el que se resolvió y
//** retorne la promesa3, y cuando la promesa 3 se cumpla imprima desde su .then el mensaje con
//** el que se resolvió. Implemente .catch para manejar el error que puede ocurrir en la promesa2, en
//** caso de que ocurra el rechazo, imprima el mensaje del error mediante err.message.

const promises = (aceptado : Boolean) => new Promise((resolve, reject)=>{
    resolve("Somos ADSI");
}).then(res => {
    console.log(res);
    return new Promise((resolve, reject)=>{
        if(aceptado){
            resolve("Somos Programadores")
        }else{
            reject(new Error("Promesa 2 no cumplida"))
        }
    }).then(res2 => {
        console.log(res2);
        return new Promise(resolve => resolve("Hacemos mover el mundo"));
    }).then(res3 => console.log(res3)).catch(err => console.log(err));
});

promises(true);

//** 6.Cree una promesa cuyo resolve y reject dependan cada uno de una llamada asíncrona usando
//** setTimeout y así, su rechazo o resolución dependerá del proceso asíncrono que termine
//** primero. Implemente métodos .then y .catch. Si la promesa se rechaza, lance el error con new
//** Error(‘info error’) en el reject e imprima el stack del error en .catch, si se cumple, resuelva la
//** promesa con la cadena “promesa resuelta” e imprímalo en el .then

const async_promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promesa resuelta"), 2000);
    setTimeout(()=>reject(new Error("info error")), 4000);
}).then(res => console.log(res)).catch(err => console.log(err));

//** 7.Cree cuatro promesas donde cada una para resolverse dependa de un setTimeout, de tal
//** manera que cada promesa se resuelva en tiempos diferentes. Ejecute las cuatro promesas de
//** forma paralela, e imprima los cuatro resultados de resolución(recuerde que estos resultados van
//** en un arreglo, se sugiere use .foreach). No olvide .catch, qué pasa si una de las promesas falla al
//** estar las cuatro en paralelo ?. Haga una implementación de Promise.race con dos de las
//** promesas anteriores.

let resultsArray : Array<any> = [];

const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("Promesa 1 Resuelta"), 2000);
    setTimeout(()=>reject("Promesa 1 rechazada"), 7000);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));

const promise2= new Promise((resolve, reject) => {
    setTimeout(()=> resolve("Promesa 2 Resuelta"), 1000);
    setTimeout(()=>reject("Promesa 2 rechazada"), 1500);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));

const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("Promesa 3 Resuelta"), 4000);
    setTimeout(()=>reject("Promesa 3 rechazada"), 5500);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));

const promise4 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("Promesa 4 Resuelta"), 6000);
    setTimeout(()=>reject("Promesa 4 rechazada"), 3000);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));
-
setTimeout(()=>{
    resultsArray.forEach(value => {
        console.log(value);
    });
}, 7000);


Promise.race([promise2, promise3]).then(val => {
    console.log(val);
}).catch(err => console.log(err));