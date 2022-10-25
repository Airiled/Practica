const mongoose = require('mongoose');

const DB_URI = `mongodb://localhost/users`;

module.exports = () =>{
    const connect = ()=>{
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('Conexion correcta');
                }
            }
        )
    }
    connect();
}