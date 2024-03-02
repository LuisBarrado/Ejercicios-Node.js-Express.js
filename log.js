//Importamos el modulo de logplease
const  Logger  = require('logplease');
//Obtenemos el registro
const logger = Logger.create('mensajería');

//Utilizamos el mensaje de debug
logger.debug(`Hola Mundo de Node`);

//Utilizamos el mensaje de info
logger.info(`Información de último momento, Node.js es lo mas!!`)

//Utilizamos el mensaje de warn 
logger.warn(`Tirando warnings como campeones`);

//Utilizamos el mensaje de error
logger.error(`Algo no está bien!!!`);