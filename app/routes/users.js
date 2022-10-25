const express = require('express');

const controller = require('../controllers/users');

const router = express.Router(); //definimos la ruta

const path = 'users'; //variable para el EP

//Creamos las diferentes rutas para las peticiones pedidas

router.get(
    `/${path}/data`,
    controller.getData
);

router.post(
    `/${path}/create`,
    controller.insertData
)

router.get(
    `/${path}/:id`,
    controller.getUser
)

router.put(
    `/${path}/update/:id`,
    controller.updateData
)

router.delete(
    `/${path}/delete/:id`,
    controller.deleteData
)


module.exports = router;