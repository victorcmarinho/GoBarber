import Sequelize, { Model } from "sequelize";

export default class Appointment extends Model<AppointmentInterface> {
    id: string;
    date: Date;
    canceled_at: Date;
    user_id: string;

    static sequelize: Sequelize.Sequelize;
    static init(sequelize) {
        // @ts-ignore
        super.init(
            {
                date: Sequelize.DATE,
                canceled_at: Sequelize.DATE,
            },
            {
                sequelize
            }
        );
        
        return this;
    }

    getUserObject(): AppointmentInterface {
        return {
            date : this.date,
            canceled_at: this.canceled_at
        }
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
        this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider'});
        
    }
}

export interface AppointmentInterface {
    id?: string,
    date: Date,
    user_id?: string,
    provide_id?: number,
    canceled_at: Date,
    created_at?: Date,
    updated_at?: Date
}