const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, "Exito", { "Content-Type": "application/pdf" });

    fs.readFile("./index.pdf", (err, data) => {
        if (err) {
            throw err;
        }
        
        res.end(data);
    });

});

server.listen(3000, "127.0.0.1", (error) => {
    if (error) {
        console.log("Hubo un error", error);
    }

    console.log("Servidor andando!");
});
