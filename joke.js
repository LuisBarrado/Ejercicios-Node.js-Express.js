//Importamos el módulo "one-liner-joke" en nuestro proyecto

const oneLinerJoke = require('one-liner-joke');

//obtenemos un chiste al azar 
const randomJoke = oneLinerJoke.getRandomJoke();

//Mostramos el chiste y las categorías por consola 
console.log('Chiste Aleatorio:');
console.log(randomJoke.body);
console.log('Categorías:' , randomJoke.tags.join(','));