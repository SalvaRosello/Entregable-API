import Express from 'express';
import path from 'path';
import { publicPath } from '../config/configData.js';
const staticRouter = Express.Router();
staticRouter.get('/newUser', (req, res) => {
    const targetFilePath = path.join(publicPath, "/newUser.html");
    res.sendFile(targetFilePath);
});
staticRouter.get('/usersManagement', (req, res) => {
    const targetFilePath = path.join(publicPath, "/usersManagement.html");
    res.sendFile(targetFilePath);
});
export { staticRouter };
