const express = require("express");
const cors = require("cors");
const { user } = require('./user')

const application = express();

const loggin = (req, res, next) => {
    console.log("Time", Date.now());

    next();
};

const autenticate =(res, req, next)=>{
    if(true){
        next();
    }else{
        res.end("usuario no autorizado")
    }
}//middleware a nivel ruta(son los que se definen en una funcion que se va a ultilizar en app.get despues del paf y antes del control de respuesta (res,req))

application.use(loggin)//middleware a nivel aplicacion
application.use(cors())
/* application.use(express.static('static')) */
application.use("/assets", express.static("static"));

application.get('/', (req, res) => {
    res.send("Hello word")
});

application.get('/user',
    autenticate(),
    (req, res, next) => {
        console.log('ruta alter');
        next();
    },
    (req, res) => {
        res.json(user)
})


application.listen(3000);