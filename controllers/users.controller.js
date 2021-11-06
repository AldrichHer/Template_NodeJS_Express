const { response, request } = require('express')

const getUser = (req = request, res = response) => {
    const {id} = req.params;
    res.json({
        id: id,
        name: "Nombre del usuario"
    })
};

const getUsers = (req = request, res = response) => {
    const {id = 0, name} = req.query;
    res.json({
        message: "GET users desde el controller de API",
        id,
        name
    });
};

const putUsers = (req = request, res = response) => {
    res.json({
        message: "PUT users desde API"
    });
};

const postUsers = (req = request, res = response) => {
    const { name, age } = req.body;
    res.json({
        message: "POST users desde API",
        name,
        age
    });
};

const deleteUsers = (req = request, res = response) => {
    res.json({
        message: "DELETE users desde API"
    });
};


module.exports = {
    getUser, getUsers, putUsers, postUsers, deleteUsers
}