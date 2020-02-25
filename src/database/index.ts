
import  configOptions  from "../config/options"
import User from "../app/models/User";
import { Sequelize } from "sequelize";

const models = [User];
class Database {
    private connection: Sequelize;
    constructor(){
        this.init();
    }
    init(): void {
        this.connection = new Sequelize(configOptions);
        models.map(model => model.init(this.connection));
    }
}

export default new Database();