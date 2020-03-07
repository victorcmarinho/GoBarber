
import  configOptions  from "../config/options"
import User from "../app/models/User";
import { Sequelize } from "sequelize";
import File from "../app/models/File";

const models = [User, File];
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