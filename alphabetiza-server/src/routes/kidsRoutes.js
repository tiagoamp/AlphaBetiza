const express = require('express');
const router = express.Router();
const firestoreDao = require("../repository/firestoreDao");

router.post('/', (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
});

router.get('/', (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso - GET all!');
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    //res.status(200).send(`Requisição recebida com sucesso! ${id} - get by id`);
    const reg = await firestoreDao.findById('kids', id);
    res.status(200).send(reg);
});

module.exports = router;