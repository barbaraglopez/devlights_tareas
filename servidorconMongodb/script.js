const express = require("express");
const application = express();
const userRoute  = require("./routes/user.js");
const mongoose = require("mongoose");
const loggin = require("./middlewares/loggin.js");
const autenticate = require("./middlewares/authentication");

application.use(loggin);
application.use(express.json());

/* application.use("/", (req,res) =>{
    res.send("Hola express")
}) */
application.use("/user", autenticate, userRoute);

mongoose.connect("mongodb://127.0.0.1:27017/clase-10", (error)=>{
    if(error){
        console.log("Hubo un error", error)
    }else{
        console.log("conexion exitosa")
    }
});

application.listen(3000, (error) => {
    if (error) {
        console.log("Hubo un error", error);
    }

    console.log("Servidor andando!");
});

