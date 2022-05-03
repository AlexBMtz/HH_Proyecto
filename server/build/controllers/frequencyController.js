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
exports.frequencyController = void 0;
const database_1 = __importDefault(require("../database"));
class FrequencyController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const frequencies = yield database_1.default.query('SELECT * FROM frequencies');
            res.json(frequencies);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO frequencies SET ?', [req.body]);
            console.log(req.body);
            res.json({ 'message': "Nueva Frecuencia Registrada" });
        });
    }
    //Método para eliminar un registro
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM frequencies WHERE frequencyId=?', [id]);
            res.json({ 'message': 'Eliminando frequencia ' + id });
        });
    }
    //Método para actualizar un registro
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE frequencies SET ? WHERE frequencyId=?', [req.body, id]);
            console.log(req.body);
            res.json({ 'message': 'Frecuencia ' + id + ' Modificada' });
        });
    }
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructurando una parte del objeto de Javascript
            const { id } = req.params;
            const frequency = yield database_1.default.query('SELECT * FROM frequencies WHERE frequencyId=?', [id]);
            if (frequency.length > 0) {
                console.log(frequency[0]);
                return res.json(frequency[0]);
            }
            else {
                res.status(404).json({ 'message': 'Frequencia no encontrada' });
            }
        });
    }
}
exports.frequencyController = new FrequencyController();
exports.default = exports.frequencyController;
