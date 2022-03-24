const express = require('express');
const Contenedor = require('./Contenedor')
const txt = new Contenedor('./texto.txt')
const random = require('@aspiesoft/random-number-js');
const app = express();
const PORT = 8080;


app.get('/productos', (req, res)=> { 

    //aca deberia ser un objeto y no una promesa
    let productos = txt.getAll() 
     
 return res.send(`aca se supone que muestre los productos ${productos}`);
})

app.get('/productosRandom', (req, res)=> { 
   
    // array deberia ser un objeto pero solo es una promise
    //si lograra transformarlo podria manipularlo para que imprima el resutado que espero
    let array = txt.getAll()
    // si array se comportara como un objeto prodria saber el lenght y generar un numero al azar 
    let numeroRandom = (random(1,array.lenght-1));
    //aca deberia imprimir 
    res.send(`aca se supone que muestre los productos Ramdom ${array[numeroRandom]}`);
})


const server = app.listen(PORT, ()=>{ 
    console.log(`estamos en el puerto ${server.address().port}`);
})

server.on('error', error=>{  
    console.log(`este es el problema ${error}`);
})