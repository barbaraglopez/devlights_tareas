const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.text());

app.listen(PORT,"127.0.0.1", (error)=>{
    if (error) {
        console.log("Hubo un error", error);
    }

    console.log("Servidor andando!");
});

