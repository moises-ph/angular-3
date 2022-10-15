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
