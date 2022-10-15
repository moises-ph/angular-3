"use strict";
function is_bool(number1, text = "Es verdadero?", hay) {
    if (hay) {
        return text + ": Si, y nos llegó " + number1;
    }
    else {
        return text + ": No, pero hay " + number1;
    }
}
;
let resultado = is_bool(10, "Hay booleano?", false);
console.log(resultado);
let suma = (num1, num2) => {
    return num1 + num2;
};
console.log(suma(2, 4));
setTimeout(() => {
    console.log("HOLA ADSI");
}, 5000);
let hola = () => {
    console.log("Hola ADSI");
};
hola();
let edad = (age) => `Su edad es ${age}`;
let myage = edad(17);
console.log(myage);
let times = (fact1, fact2) => fact1 * fact2;
let mytimes = times(6, 19);
console.log(mytimes);
let mod = (div1, div2) => {
    let modulo = div1 % div2;
    return modulo;
};
let mymod = mod(5, 9);
console.log(mymod);
const user = {
    username: "Moises Pineda",
    useridentifier: "@moispineda",
    email: "mois.mp8@gmail.com",
    gender: "Male"
};
let { username, useridentifier, email, gender } = user;
const frameworks = {
    react: true,
    vue: true,
    angular: false,
    next: true,
    astro: true
};
let { react, vue, next, astro } = frameworks;
