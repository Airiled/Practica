const { default: mongoose } = require('mongoose');
const model = require('../models/users');

const parseId = (id) => {
    return mongoose.Types.ObjectId(id);
}

exports.getData = (req, res)=>{  //nos trae los valores de la base de datos
    model.find({}, (err, docs) => {
        res.send({
            docs
        })
    })
}

exports.insertData = (req, res) => { //crear usuario
    const data = req.body;
    model.create(data, (err, docs) => {
        if(err){
            res.send({error: 'Error'}, 422);
        }else{
            res.send({data: docs});
        }
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

