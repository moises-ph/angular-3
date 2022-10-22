//** ++++++++++++++++++++++++++++++++++++++++++++ ASYNC-AWAIT ++++++++++++++++++++++++++++++++++++++++++++ **//

//** 1. Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una
//** promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál
//** es el resultado de la impresión? ¿un valor numérico ? ¿una promesa ?

async function squar(num: number){
    let result: number = num**2;
    return new Promise(resolve => resolve(result))
};

console.log(squar(4)); //* Una promesa

//** 2. Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal
//** manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis
//** segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado
//** obtiene? ¿una promesa?, ¿ un entero ?

function resultado(){
    return new Promise(resolve => setTimeout(()=> resolve(8), 6000));
};

console.log(resultado()); //* Una promesa pendiente

//** 3. Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función
//** “resultado” de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”,
//** luego, eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿una
//** promesa?, ¿ un entero ?

async function cuadradoAsincrono(){
    let result:any = await resultado();
    let num : number = Number(result)**2;
    console.log(num);
};

cuadradoAsincrono();

//** 4. Responda:
//** a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente
//** dentro de la función ?
//** b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?
//** c) ¿Cuál es la condición para poder usar la cláusula await ?


//** a) Podemos ejecutar la función y agregar .then() luego de la ejecución. Ej: resultado().then() */
//** b) Podemos asignar a x variable la promesa y en el método .then() retornarla así. Ej: x:any = promise.then(res => res) */
//** c) Primero se debe usar await dentro de una función, es muy importante porque la única condición para usar await es que 
//** la función donde se vaya a usar sea declarada como asíncrona de esta manera async function [funcion](){...codigo con await....}


//** ++++++++++++++++++++++++++++++++++ POO ++++++++++++++++++++++++++++++++++ **//

//** 1. Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
//** y una privada, ambas deben ser pasadas al constructor.

class coche {
    private serial: number = 0;
    public velocidad: number = 0;

    static encender(encendido: boolean):string{
        if(encendido){
            return "Coche encendido";
        }
        else{
            return "Coche apagado";
        }
    }

    arrancar(acelerar : boolean):boolean{
        if(acelerar){
            this.velocidad ++;
            return true;
        }
        else{
            return false;
        }
    }

    constructor(serial: number, velocidad?: number ){
        this.serial = serial;
        if(velocidad){
            this.velocidad = velocidad;
        }
        else{
            this.velocidad = 0;
        }
    }
};

const newCar = new coche(1234, 23);

//** 2. Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
//** públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
//** dentro de la clase.

class Robot{
    public color : string;
    public marca: string;
    private isOn : boolean = false;
    private bateria: number = 100

    constructor(color: string, marca: string){
        this.color = color;
        this.marca = marca;
    }

    static positionX: number = 0;
    static positionY: number = 0;

    encender():boolean{
        if(this.bateria = 0){
            return false;
        }
        else{
            this.bateria--;
            this.isOn = true;
            return true;
        }
    }

    apagar():boolean{
        if(this.isOn){
            this.isOn = false;
            return true;
        }
        else{
            return false;
        }
    }

    static moverse(moveX: number, moveY:number):void{
        this.positionX = moveX;
        this.positionY = moveY;
    }
    
    static saltar():string{
        let altura = Math.random() * 5;
        return "El robot saltó " + altura;
    }
}

const myRobot = new Robot("Azul", "InnovaMake");

//** Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
//** públicas y dos privadas, todas deben ser pasadas al constructor

class PC{
    private serial: string;
    private winLicencia : string;
    public windowsVersion: number;
    public ram: number;

    constructor(serial: string, licWindows:string, windowsVersion: number, ram: number){
        this.serial = serial;
        this.winLicencia = licWindows;
        this.windowsVersion = windowsVersion;
        this.ram = ram;
    };

    static calculator(num1: number, num2: number, operador: string):any{
        if(operador == "+"){
            return num1 + num2;
        }
        else if(operador == "-"){
            return num1 - num2;
        }
        else if(operador == "*"){
            return num1 * num2;
        }
        else if(operador == "/"){
            return num1 / num2;
        }
        else{
            return false
        }
    };

    static bienvenida(user: string):string{
        return `Bienvenido ${user} a su computador personal`;
    };

    aumentarRAM(cantidadram: number):boolean{
        this.ram = cantidadram;
        return true;
    };

    actualizarWindows():boolean{
        this.windowsVersion++;
        return true;
    }
};

const myPC = new PC("X12H4h5hj2", "jghhg8291JHJ2323", 10, 4024);