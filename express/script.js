/* const express = require("express");
const events = require('events');


const evento = new events();

evento.emit('prueba', { name: "barbara" }) */

const express = require("express");

const server = express();

server.get("/",(req,res)=>{
    res.send("hello word")
})

/* server.get("/:params", (req, res) => {
    res.send(`hello word => mis params son :${JSON.stringify(req.params)}.Mis queryparams son => ${JSON.stringify()}`;
}); */

server.listen(3000)



