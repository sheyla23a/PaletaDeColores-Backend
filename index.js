import express from 'express';
console.log('Hola Mundo')

const app = express();
app.set('port',process.env.PORT ||4002);
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})