const express = require('express');
const controller = require('../controllers/users.js');
const router = express.Router(); //definimos la ruta
const path = 'users'; //variable para el EP

const users = require('../models/users');
//Creamos las diferentes rutas para las peticiones pedidas

router.get(
    `/data`,
    controller.getData
);

router.post(
    `/create`,
    controller.insertData
)

router.get(
    `/:id`,
    controller.getUser
)

router.put(
    `/update/:id`,
    controller.updateData
)

router.delete(
    `/delete/:id`,
    controller.deleteData
)


module.exports = router;