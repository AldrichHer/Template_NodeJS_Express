const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        //Middlewares
        this.middlewares();

        //Ryutas de la app
        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        //Lectura y parseo del Body
        this.app.use(express.json());

        //servir en / el index de public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en el puerto ${this.port}`)
        })
    }
}


module.exports = Server;
