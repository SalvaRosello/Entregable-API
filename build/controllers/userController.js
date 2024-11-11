var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deleteUserById, findUserById, getUsers, saveNewUser } from "../models/userModel.js";
export function newUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield saveNewUser(user);
            return result;
        }
        catch (error) { //TODO: quitar el any
            if (error.code === "23505") {
                const columnMatch = error.detail.match(/Key \((.*?)\)=/);
                const columnName = columnMatch ? columnMatch[1] : 'campo';
                return `El ${columnName} ya existe en la base de datos`;
            }
            return error;
        }
    });
}
export function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield getUsers();
        return result;
    });
}
export function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield findUserById(id);
        return result;
    });
}
export function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield deleteUserById(id);
        return result;
    });
}
