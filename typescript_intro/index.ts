console.log("Hola mundo");


async function esPuta(){
    try{
        await fetch("https://").then(res => res.json());
    }
    catch(Error){
        console.log(Error);
        return;
    }
}

esPuta();