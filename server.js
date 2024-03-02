//Una vez instalado express para el ejercicio, empezamos a crear el servidor 

const express = require('express');

const app = express();

const port= 3030;

app.get('/',(req,res) => {
    res.send ("Hola usuario. Servidor Express escuchando por el puerto 3030!")
})

app.listen(port, () => {
    console.log ('Hola usuario. Servidor Express escuchando por el puerto 3030!')
})