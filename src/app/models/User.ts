import Sequelize, { Model } from "sequelize";
export default class User extends Model {

    static sequelize: Sequelize.Sequelize;
    static init(sequelize): void {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN
            },
            {
                sequelize
            }
        );
    }
}