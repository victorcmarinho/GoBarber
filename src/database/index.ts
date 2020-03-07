
import  configOptions  from "../config/options"
import User from "../app/models/User";
import { Sequelize, Model } from "sequelize";
import File from "../app/models/File";

const models = [User, File];
class Database {
    private connection: Sequelize;
    constructor(){
        this.init();
    }
    init(): void {
        this.connection = new Sequelize(configOptions);
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate(this.connection.models) )
    }
}

export default new Database();