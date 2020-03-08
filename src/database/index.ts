
import  configOptions  from "../config/options"
import User from "../app/models/User";
import { Sequelize } from "sequelize";
import File from "../app/models/File";
import Appointment from "../app/models/Appointment";
import { Mongoose } from "mongoose";

const models = [User, File, Appointment];
class Database {
    private connection: Sequelize;
    mongoConnection: any;
    constructor(){
        this.init();
        this.mongo();
    }
    init(): void {
        this.connection = new Sequelize(configOptions);
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate(this.connection.models) )
    }

    mongo() {
        this.mongoConnection = new Mongoose().connect(
            'mongodb://localhost:27017/gobarber',
            {
                useNewUrlParser: true,
                useFindAndModify: true
            }
        );
    }
}

export default new Database();