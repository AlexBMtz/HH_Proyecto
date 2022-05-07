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
exports.coordinatorController = void 0;
const database_1 = __importDefault(require("../database"));
class CoordinatorController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coordinators = yield database_1.default.query('SELECT * FROM coordinators');
            res.json(coordinators);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO coordinators SET ?', [req.body]);
            console.log(req.body);
            res.json({ 'message': "Nuevo Coordinador Registrado" });
        });
    }
    //Método para eliminar un registro
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM coordinators WHERE coordinatorId=?', [id]);
            res.json({ 'message': 'Eliminando a Coordinador con matrícula ' + id });
        });
    }
    //Método para actualizar un registro
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE coordinators SET ? WHERE coordinatorId=?', [req.body, id]);
            console.log(req.body);
            res.json({ 'message': 'Coordinador con matrícula ' + id + ' Modificado' });
        });
    }
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructurando una parte del objeto de Javascript
            const { id } = req.params;
            const coordinator = yield database_1.default.query('SELECT * FROM coordinators C WHERE coordinatoId=?', [id]);
            if (coordinator.length > 0) {
                console.log(coordinator[0]);
                return res.json(coordinator[0]);
            }
            else {
                res.status(404).json({ 'message': 'Coordinador no encontrado' });
            }
        });
    }
}
exports.coordinatorController = new CoordinatorController();
exports.default = exports.coordinatorController;
