import express from 'express';
import routes from './routes';
import './database';
import path from 'path';

class App {
    private _serve: express.Application;

    constructor() {
      this._serve = express();
      this.middlewares();
      this.routes();
    }

    get server(): express.Application {
      return this._serve;
    }

    middlewares(): void {
      this._serve.use(express.json());
      this._serve.use('/files', express.static(path.resolve(__dirname, '..', 'tmp','uploads' )));
    }

    routes(): void {
      this._serve.use(routes);
    }
}

export default new App().server;
