
import  configOptions  from "../config/options"
import User from "../app/models/User";
import Sequelize from "sequelize";

const models = [User];
export default  class Database {
    connection;
    constructor(){
        this.init();
    }
    init() {
        this.connection = new Sequelize(configOptions);
        models.map(model => model.init(this.connection));
    }
}