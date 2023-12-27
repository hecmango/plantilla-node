
const express = require('express')
const cors = require('cors');
// import routesUser from '../routes/user';
// const routesUser = require('../routes/user')

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    middlewares () {
        // CORS
      this.app.use(cors());

      // Directorio publico
      this.app.use(express.static('public'));

      //Parseo del body
      this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user.js'))
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;