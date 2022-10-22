var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function squar(num) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = num ** 2;
        return new Promise(resolve => resolve(result));
    });
}
;
console.log(squar(4));
function resultado() {
    return new Promise(resolve => setTimeout(() => resolve(8), 6000));
}
;
console.log(resultado());
function cuadradoAsincrono() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield resultado();
        let num = Number(result) ** 2;
        console.log(num);
    });
}
;
cuadradoAsincrono();
class coche {
    constructor(serial, velocidad) {
        this.serial = 0;
        this.velocidad = 0;
        this.serial = serial;
        if (velocidad) {
            this.velocidad = velocidad;
        }
        else {
            this.velocidad = 0;
        }
    }
    static encender(encendido) {
        if (encendido) {
            return "Coche encendido";
        }
        else {
            return "Coche apagado";
        }
    }
    arrancar(acelerar) {
        if (acelerar) {
            this.velocidad++;
            return true;
        }
        else {
            return false;
        }
    }
}
;
const newCar = new coche(1234, 23);
class Robot {
    constructor(color, marca) {
        this.isOn = false;
        this.bateria = 100;
        this.color = color;
        this.marca = marca;
    }
    encender() {
        if (this.bateria = 0) {
            return false;
        }
        else {
            this.bateria--;
            this.isOn = true;
            return true;
        }
    }
    apagar() {
        if (this.isOn) {
            this.isOn = false;
            return true;
        }
        else {
            return false;
        }
    }
    static moverse(moveX, moveY) {
        this.positionX = moveX;
        this.positionY = moveY;
    }
    static saltar() {
        let altura = Math.random() * 5;
        return "El robot saltó " + altura;
    }
}
Robot.positionX = 0;
Robot.positionY = 0;
const myRobot = new Robot("Azul", "InnovaMake");
class PC {
    constructor(serial, licWindows, windowsVersion, ram) {
        this.serial = serial;
        this.winLicencia = licWindows;
        this.windowsVersion = windowsVersion;
        this.ram = ram;
    }
    ;
    static calculator(num1, num2, operador) {
        if (operador == "+") {
            return num1 + num2;
        }
        else if (operador == "-") {
            return num1 - num2;
        }
        else if (operador == "*") {
            return num1 * num2;
        }
        else if (operador == "/") {
            return num1 / num2;
        }
        else {
            return false;
        }
    }
    ;
    static bienvenida(user) {
        return `Bienvenido ${user} a su computador personal`;
    }
    ;
    aumentarRAM(cantidadram) {
        this.ram = cantidadram;
        return true;
    }
    ;
    actualizarWindows() {
        this.windowsVersion++;
        return true;
    }
}
;
const myPC = new PC("X12H4h5hj2", "jghhg8291JHJ2323", 10, 4024);
