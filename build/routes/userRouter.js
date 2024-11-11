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
import { deleteUser, getAllUsers, getUser, newUser } from '../controllers/userController.js';
import { validateNumericParams } from '../middlewares/validateNumericParams.js';
const userRouter = Express.Router();
userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAllUsers();
    res.json(result);
}));
userRouter.get("/:id", validateNumericParams, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getUser(req.params.id);
    res.send(result);
}));
userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = { userName: req.body.username, name: req.body.name, first_surname: req.body.surname, email: req.body.email, password: req.body.password };
    const result = yield newUser(user);
    res.send(result);
}));
userRouter.delete("/:id", validateNumericParams, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield deleteUser(req.params.id);
    res.send(result);
}));
export default userRouter;
