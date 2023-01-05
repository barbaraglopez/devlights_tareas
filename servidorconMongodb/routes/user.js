const express = require('express')
const Route = express.Router();
const userModel = require("../schemas/user.js");


Route.get("/", (req, res) => {
    userModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

Route.get("/:id", (req, res) => {
    userModel.find({ id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

Route.post("/create", (req, res) => {
    console.log("El body es: ", req.body);

    const user = new userModel(req.body);

    user
        .save()
        .then((document) => {
            res.json({ status: 200, data: document });
        })
        .catch((error) => {
            res.json({ status: 500, data: error });
        });
});

Route.delete("/:id", (req, res) => {
    userModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});


module.exports = Route