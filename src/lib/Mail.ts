
import nodemailer, {Transporter,SendMailOptions} from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
    transporter: Transporter; 
    constructor(){
        const { auth } = mailConfig;
        this.transporter = nodemailer.createTransport({
            ...mailConfig,
            ...{auth: auth.user ? auth : null}
        });
    }

    sendMail(message: SendMailOptions) {
        return this.transporter.sendMail({
            ...mailConfig.default,
            ...message
        });
    }
}
export default new Mail();