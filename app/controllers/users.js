const { default: mongoose } = require('mongoose');
const users = require('../models/users');
const model = require('../models/users');

const parseId = (id) => {
    return mongoose.Types.ObjectId(id);
}

exports.prueba = async (req, res) => {
    const usuariosDB = await users.find();
    console.log(usuariosDB);
    model.find({}, (err, docs) => {
        // res.send({
        //     docs: docs[10]
        // })
        createUserRow(docs);
    })
}

exports.getData = async (req, res)=>{  //nos trae los valores de la base de datos
    // try {
    //     const arrayUserDB = await users.find()
    //     console.log(arrayUserDB);
    //     res.render('index', {
    //         arrayUserDB
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
    model.find({}, (err, docs) => {
        res.send({
            docs
        })
        console.log(docs[10]);
    })
}

exports.insertData = async (req, res) => { //crear usuario
    const data = req.body;
    model.create(data, async (err, docs) => {
        if(err){
            res.send({error: 'Error'}, 422);
        }else{
            res.send({data: docs});
        }

        // const res = await fetch('https://jsonplaceholder.typicode.com/users/create', {
        // method: 'POST',
        // body: JSON.stringify({
        //     userId: 11,
        //     user
        // }),
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        // },
        // })
        // .then((response) => response.json())
        // .then((json) => console.log(json));

    })
}

exports.getUser = (req, res) =>{  //buscar usuario
    const { id } = req.params;
    model.findById(id, (err, docs) =>{
        if(err){
            res.send({error: 'El ID ingresado no existe'});
        }else{
            res.send({data: docs});
        }
    })
}

exports.updateData = (req, res) =>{  //actualizar usuario
    const { id } = req.params;
    const body = req.body;
    model.updateOne({ 
    _id: parseId(req.params.id)},
    body,
    (err, docs) => {
        res.send({
            items: docs
        })
    })
}

exports.deleteData = (req, res) =>{ //eliminar usuario
    const { id } = req.params;
    model.deleteOne({ 
    _id: parseId(req.params.id)},
    (err, docs) => {
        res.send({
            items: docs
        })
    })
}

