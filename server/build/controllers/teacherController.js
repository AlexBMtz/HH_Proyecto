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
exports.teacherController = void 0;
const database_1 = __importDefault(require("../database"));
class TeacherController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const teachers = yield database_1.default.query('SELECT U.*, T.* FROM teachers T, users U WHERE T.userId=U.userId');
            res.json(teachers);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            yield database_1.default.query('CALL insertarTeacher(?,?,?)', [data.pEmail, data.pRfc, data.pHiringDate]);
            console.log(req.body);
            res.json({ 'message': "Nuevo Teacher Registrado" });
        });
    }
    //Método para eliminar un registro
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM teachers WHERE teacherId=?', [id]);
            res.json({ 'message': 'Eliminando a Teacher con matrícula ' + id });
        });
    }
    //Método para actualizar un registro
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE teachers SET ? WHERE teacherId=?', [req.body, id]);
            console.log(req.body);
            res.json({ 'message': 'Teacher con matrícula ' + id + ' Modificado' });
        });
    }
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructurando una parte del objeto de Javascript
            const { id } = req.params;
            const teacher = yield database_1.default.query('SELECT U.*, T.* FROM teachers T, users U WHERE T.userId=U.userId AND teacherId=?', [id]);
            if (teacher.length > 0) {
                console.log(teacher[0]);
                return res.json(teacher[0]);
            }
            else {
                res.status(404).json({ 'message': 'Teacher no encontrado' });
            }
        });
    }
}
exports.teacherController = new TeacherController();
exports.default = exports.teacherController;
