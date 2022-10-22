"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const world = new Promise(resolve => {
    const message = "Somos programadores, hacemos mover el mundo";
    resolve(message);
}).then(msg => console.log(msg));
const rej_err = new Promise((resolve, reject) => {
    reject("Ha ocurrido un error desconocido");
}).catch(err => console.log(err));
const subsidios_1 = __importDefault(require("./subsidios"));
(0, subsidios_1.default)(5).then(res => console.log(res)).catch(err => console.log(err));
const cuadrado = new Promise((resolve, reject) => {
    resolve(2);
}).then(res => Number(res) ** 2).then(res2 => Number(res2) ** 2).then(res3 => Number(res3) ** 2).then(res4 => { res4 = Number(res4) ** 2; console.log(res4); });
const promises = (aceptado) => new Promise((resolve, reject) => {
    resolve("Somos ADSI");
}).then(res => {
    console.log(res);
    return new Promise((resolve, reject) => {
        if (aceptado) {
            resolve("Somos Programadores");
        }
        else {
            reject(new Error("Promesa 2 no cumplida"));
        }
    }).then(res2 => {
        console.log(res2);
        return new Promise(resolve => resolve("Hacemos mover el mundo"));
    }).then(res3 => console.log(res3)).catch(err => console.log(err));
});
promises(true);
const async_promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promesa resuelta"), 2000);
    setTimeout(() => reject(new Error("info error")), 4000);
}).then(res => console.log(res)).catch(err => console.log(err));
let resultsArray = [];
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa 1 Resuelta"), 2000);
    setTimeout(() => reject("Promesa 1 rechazada"), 7000);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa 2 Resuelta"), 1000);
    setTimeout(() => reject("Promesa 2 rechazada"), 1500);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa 3 Resuelta"), 4000);
    setTimeout(() => reject("Promesa 3 rechazada"), 5500);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa 4 Resuelta"), 6000);
    setTimeout(() => reject("Promesa 4 rechazada"), 3000);
}).then(res => resultsArray.push(res)).catch(err => resultsArray.push(err));
-setTimeout(() => {
    resultsArray.forEach(value => {
        console.log(value);
    });
}, 7000);
Promise.race([promise2, promise3]).then(val => {
    console.log(val);
}).catch(err => console.log(err));
