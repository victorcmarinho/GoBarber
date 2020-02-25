import express from 'express';
import routes from './routes';
import './database';

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
    }

    routes(): void {
      this._serve.use(routes);
    }
}

export default new App().server;
