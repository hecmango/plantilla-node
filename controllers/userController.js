const {response} = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'Get de usuario'
    });
}

const usuariosPost = (req, res =response) => {
    const {nombre} = req.body;

    res.json({
        nombre,
    });
}

const usuariosPut = (req, res =response) => {
    const {id} =req.params;
    res.json({
        msg: 'Put de usuario',
        id
    });
}

const usuariosDelete = (req, res =response) => {
    res.json({
        msg: 'Delete de usuario'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}