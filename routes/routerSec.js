const express = require('express')
const routerSec = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors');

routerSec.use(cors());

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        ssl: { rejectUnauthorized: false }
    }
});


routerSec.post('/register', (req, res) => {
    knex('usuario')
        .insert({
            nome: req.body.nome,
            login: req.body.login,
            senha: bcrypt.hashSync(req.body.senha, 8),
            email: req.body.email
        }, ['id', 'nome', 'email', 'login', 'roles'])
        .then((result) => {
            let usuario = result[0]
            res.status(200).json({ "id": usuario.id, "nome": usuario.nome, "email": usuario.email, "login": usuario.login, "roles": usuario.roles })
            return
        })
        .catch(err => {
            res.status(500).json({
                message: 'Erro ao registrar usuario - ' + err.message
            });
        });
});

routerSec.post('/login', (req, res) => {
    knex
        .select('*').from('usuario').where({ login: req.body.login })
        .then(usuarios => {
            if (usuarios.length) {
                let usuario = usuarios[0]
                let checkSenha = bcrypt.compareSync(req.body.senha, usuario.senha)
                if (checkSenha) {
                    var tokenJWT = jwt.sign({ id: usuario.id },
                        process.env.SECRET_KEY, {
                        expiresIn: 3600
                    })

                    res.status(200).json({
                        id: usuario.id,
                        login: usuario.login,
                        nome: usuario.nome,
                        roles: usuario.roles,
                        token: tokenJWT
                    });
                    return
                }
            }

            res.status(200).json({ message: 'Login ou senha incorretos' })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Erro ao verificar login - ' + err.message
            });
        });
});

module.exports = routerSec;