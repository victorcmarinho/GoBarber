import express from 'express';
import routes from './routes';
import './database';

class App {
    _serve;

    constructor() {
      this._serve = express();
      this.middlewares();
      this.routes();
    }

    get server() {
      return this._serve;
    }

    middlewares(){
      this._serve.use(express.json());
    }

    routes(){
      this._serve.use(routes);
    }
}

export default new App().server;
