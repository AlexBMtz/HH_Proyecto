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
exports.studentController = void 0;
const database_1 = __importDefault(require("../database"));
class StudentController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield database_1.default.query('SELECT * FROM students');
            res.json(students);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO students SET ?', [req.body]);
            console.log(req.body);
            res.json({ 'message': "Nuevo Estudiante Registrado" });
        });
    }
    //Método para eliminar un registro
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM students WHERE studentId=?', [id]);
            res.json({ 'message': 'Eliminando Estudiante con matrícula ' + id });
        });
    }
    //Método para actualizar un registro
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE students SET ? WHERE studentId=?', [req.body, id]);
            console.log(req.body);
            res.json({ 'message': 'Estudiante con matrícula ' + id + ' Modificado' });
        });
    }
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructurando una parte del objeto de Javascript
            const { id } = req.params;
            const program = yield database_1.default.query('SELECT * FROM students S WHERE studentId=?', [id]);
            if (program.length > 0) {
                console.log(program[0]);
                return res.json(program[0]);
            }
            else {
                res.status(404).json({ 'message': 'Estudiante no encontrado' });
            }
        });
    }
}
exports.studentController = new StudentController();
exports.default = exports.studentController;
