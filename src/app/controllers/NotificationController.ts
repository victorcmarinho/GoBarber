import Notification from '../schemas/Notification';
import { Response, Request } from 'express';
import User from '../models/User';

class NotificationController {
    async index (req: Request, res: Response){
        const isProvider = await User.findOne({ 
            where: {id: req.userId, provider: true},
        });

        if(!isProvider)
            return res.status(401).json({error: 'Only providers can load notifications'});
        const notifications = await Notification.find({
            user: req.userId
        }).sort({createdAt: 'desc'}).limit(20);
        
        return res.json(notifications);

    }
}

export default new NotificationController();