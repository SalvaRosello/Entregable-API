import Express from 'express';
import path from 'path';
import { publicPath } from '../config/configData.js';
const router = Express.Router();
router.get('/newUser', (req, res) => {
    const targetFilePath = path.join(publicPath, "/newUser.html");
    res.sendFile(targetFilePath);
});
router.get('/usersManagement', (req, res) => {
    const targetFilePath = path.join(publicPath, "/usersManagement.html");
    res.sendFile(targetFilePath);
});
export { router };
