import Sequelize, { Model } from 'sequelize';
import { Model as ModelTS } from 'sequelize-typescript';

export default class User extends ModelTS {
    static init(sequelize) {

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