const express = require('express');
const db = require('./database');
const app = express(); //inicializamos el server 
const path = require('path'); //nos permite trabajar con directorios mas facil
let bodyParser = require('body-parser'); // nos permite acceder a la informacion de las peticiones
const userRouters = require('./app/routes/users'); //accedemos a la carpeta de rutas de la pagina

// bodyParser = bodyParser.json();

// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views')

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)
 

app.use(express.static(__dirname + '/public')); //establecemos esa ruta como estatica que es donde se guardan todos los archivos css, js, imgs ect

//rutas web
app.use('/users', require('./app/routes/users'));

app.get('/', (req, res)=>{ 
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(3001, ()=>{ // establecemos el puerto donde va a correr el server
    console.log('Server corriendo en puerto 3001');
})


db(); //iniciamos base de datos








