import express from 'express';
import routes from './routes';

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

    private middlewares(): void {
      this._serve.use(express.json());
    }

    private routes(): void {
      this._serve.use(routes);
    }
}

export default new App().server;
