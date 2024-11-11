var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from "../config/configDb.js";
export function saveNewUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `INSERT INTO "user" ("userName", "name", "first_surname", "password", "email") VALUES ('${user.userName}', '${user.name}', '${user.first_surname}', '${user.password}','${user.email}')`;
        const result = yield pool.query(queryString);
        return result.rows;
    });
}
export function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `SELECT * FROM "user"`;
        const result = yield pool.query(queryString);
        return result.rows;
    });
}
export function findUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `SELECT * FROM "user" WHERE "id" = ${id}`;
        const result = yield pool.query(queryString);
        return result.rows;
    });
}
export function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `DELETE FROM "user" WHERE "id" = ${id}`;
        const result = yield pool.query(queryString);
        return result.rows;
    });
}
