"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const database_1 = __importDefault(require("../database"));
class LoginController {
    getUserDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.params; //,UserId
            //  const user = await pool.query('SELECT * FROM users WHERE email = ? AND UserId = ?',[email,UserId])
            // const user = await pool.query('SELECT email, UserId FROM users WHERE email = ? AND UserId = ?',[email,UserId])
            //const user = await pool.query('IF EXISTS (SELECT * FROM users WHERE email = ?) BEGIN (SELECT * from users WHERE email = ?) END ELSE BEGIN SELECT 2 END',[email, email])
            const user = yield database_1.default.query('SELECT IF(EXISTS (SELECT * FROM users WHERE email = ? and password = ?),1,0) as "Email"', [email, password]);
            if (user.length > 0) //Sigue
             {
                console.log(user[0]);
                return res.json(user[0]);
            }
            else {
                res.status(404).json({ 'mensaje': 'User no existe' });
            }
            res.json(user);
        });
    }
}
exports.loginController = new LoginController();
exports.default = exports.loginController;
