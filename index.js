import express from 'express';
console.log('Hola Mundo')

const app = express();
app.set('port',4002);
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})