//** 3. La entrega de subsidios en una institución pública depende de si el estrato de la persona es menor o igual
//** a 2. Cree un programa que implemente una variable que guarde el estrato del usuario, y mediante la
//** evaluación de tal variable, muestre si el usuario tiene derecho o no a un subsidio usando promesas, de tal
//** manera que si la variable contiene un valor numérico entre 1 y 6, la promesa se resuelva con un string
//** que indique si el usuario tiene o no derecho al subsidio, tal string deberá ser imprimido en el .then de la
//** promesa con console.log. En caso de que la variable contenga un valor nó válido la promesa se debe
//** rechazar lanzando el siguiente error: new Error("Estrato no válido"), tal error debe ser mostrado en
//** el .catch de la promesa de la siguiente manera: console.log('Ha ocurrido un error: ', err.message),
//** tenga en cuenta que err, es la información del error(motivo de rechazo) que se pasa desde el
//** reject al catch como parámetro de nombre err.

const Subsidio = (estrato: number) =>new Promise((resolve, reject)=>{
        if(estrato < 1 || estrato > 6){
            reject(new Error("Estrato no valido"));
        }
        else{
            if(estrato <= 2){
                resolve("La persona tiene derecho al subsidio");
            }
            else{
                resolve("La persona no tiene derecho al subsidio");
            }
        }
    })
;
export default Subsidio;