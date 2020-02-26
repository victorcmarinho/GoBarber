import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model<UserInterface> {
    id: string;
    name: string;
    email: string;
    password_hash: string;
    provider: boolean;
    created_at: Date;
    updated_at: Date

    static sequelize: Sequelize.Sequelize;
    static init(sequelize) {
        // @ts-ignore
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN
            },
            {
                sequelize
            }
        );
        
        User.initHooks();
        return this;
    }

    private static initHooks() {
        this.addHook('beforeSave', async (user: any) => {
            if (user.password){
                user.password_hash = await bcrypt.hash(user.password, 14);
            }
        });
    }

    async checkPassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password_hash);
    }

    getUserObject(): UserInterface {
        return {
            name : this.name,
            email: this.email,
            password_hash: this.password_hash,
            provider: this.provider
        }
    }
}

export interface UserInterface {
    id?: string,
    name: string,
    email: string,
    password_hash: string,
    provider?: boolean,
    created_at?: Date,
    updated_at?: Date
}