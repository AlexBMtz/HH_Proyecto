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
exports.programController = void 0;
const database_1 = __importDefault(require("../database"));
class ProgramController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const programs = yield database_1.default.query('SELECT * FROM programs');
            res.json(programs);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO programs SET ?', [req.body]);
            console.log(req.body);
            res.json({ 'message': "Nuevo Programa Registrado" });
        });
    }
    //Método para eliminar un registro
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM programs WHERE programId=?', [id]);
            res.json({ 'message': 'Eliminando Programa ' + id });
        });
    }
    //Método para actualizar un registro
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE programs SET ? WHERE programId=?', [req.body, id]);
            console.log(req.body);
            res.json({ 'message': 'Programa ' + id + ' Modificado' });
        });
    }
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructurando una parte del objeto de Javascript
            const { id } = req.params;
            const program = yield database_1.default.query('SELECT * FROM programs WHERE programId=?', [id]);
            if (program.length > 0) {
                console.log(program[0]);
                return res.json(program[0]);
            }
            else {
                res.status(404).json({ 'message': 'Programa no encontrado' });
            }
        });
    }
}
exports.programController = new ProgramController();
exports.default = exports.programController;
