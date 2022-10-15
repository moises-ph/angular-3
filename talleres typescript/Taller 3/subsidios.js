"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subsidio = (estrato) => new Promise((resolve, reject) => {
    if (estrato < 1 || estrato > 6) {
        reject(new Error("Estrato no valido"));
    }
    else {
        if (estrato <= 2) {
            resolve("La persona tiene derecho al subsidio");
        }
        else {
            resolve("La persona no tiene derecho al subsidio");
        }
    }
});
exports.default = Subsidio;
