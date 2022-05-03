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
exports.studentsCoursesController = void 0;
const database_1 = __importDefault(require("../database"));
class StudentsCoursesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lists = yield database_1.default.query('SELECT cs.crn, c.courseName,f.frequency,p.program,sch.startingTime, sch.endingTime,sp.period,cs.studentId,cs.wq1,cs.wq2,cs.wq3,cs.oq1,cs.oq2,cs.oq3,cs.cp1,cs.cp2,cs.cp3,cs.finalProject FROM course_details AS cs, students AS s,courses AS c,frequencies f,programs p, schedules sch,periods sp WHERE cs.crn=c.crn AND cs.studentId=s.studentId AND c.frequencyId=f.frequencyId AND c.scheduleId=sch.scheduleId AND c.programId=p.programId AND c.periodId=sp.periodId');
            res.json(lists);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO students_courses SET ?', [req.body]);
            console.log(req.body);
            res.json({ 'message': "Nueva Lista de Calificaciones Creada" });
        });
    }
    //Método para eliminar un registro
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM students_courses WHERE crn=?', [id]);
            res.json({ 'message': 'Eliminando Lista de Calificaciones del curso ' + id });
        });
    }
    //Método para actualizar un registro
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE students_courses SET ? WHERE crn=?', [req.body, id]);
            console.log(req.body);
            res.json({ 'message': 'Eliminando Lista de Calificaciones del curso ' + id + ' Modificada' });
        });
    }
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructurando una parte del objeto de Javascript
            const { id } = req.params;
            const list = yield database_1.default.query('SELECT cs.crn, c.courseName,f.frequency,p.program,sch.startingTime, sch.endingTime,sp.period,cs.studentId,cs.wq1,cs.wq2,cs.wq3,cs.oq1,cs.oq2,cs.oq3,cs.cp1,cs.cp2,cs.cp3,cs.finalProject FROM course_details AS cs, students AS s,courses AS c,frequencies f,programs p, schedules sch,periods sp WHERE cs.crn=? AND cs.crn=c.crn AND cs.studentId=s.studentId AND c.frequencyId=f.frequencyId AND c.scheduleId=sch.scheduleId AND c.programId=p.programId AND c.periodId=sp.periodId', [id]);
            if (list.length > 0) {
                console.log(list[0]);
                return res.json(list[0]);
            }
            else {
                res.status(404).json({ 'message': 'Lista de Calificaciones no encontrada' });
            }
        });
    }
}
exports.studentsCoursesController = new StudentsCoursesController();
exports.default = exports.studentsCoursesController;
