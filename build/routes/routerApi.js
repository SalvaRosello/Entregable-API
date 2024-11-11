var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Express from 'express';
import { getAllUsers, getUserById, newUser } from '../controllers/userController.js';
const routerApi = Express.Router();
routerApi.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAllUsers();
    res.json(result);
}));
routerApi.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getUserById(req.params.id);
    res.send(result);
}));
routerApi.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = { userName: req.body.username, name: req.body.name, first_surname: req.body.surname, email: req.body.email, password: req.body.password };
    const result = yield newUser(user);
    res.send(result);
}));
export default routerApi;
