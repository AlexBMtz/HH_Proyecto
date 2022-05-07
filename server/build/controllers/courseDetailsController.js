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
            const { id } = req.params;
            const lists = yield database_1.default.query('SELECT cs.courseId, c.courseName,f.frequency,p.program,sch.startingTime, sch.endingTime,sp.period,cs.studentId,cs.wq_1,cs.wq_2,cs.wq_3,cs.oq_1,cs.oq_2,cs.oq_3,cs.cp_1,cs.cp_2,cs.cp_3,cs.final_project,cs.final_grade FROM students_courses AS cs, students AS s,courses AS c,frequencies f,programs p, schedules sch,periods sp WHERE cs.courseId = ? AND cs.courseId=c.crn AND cs.studentId=s.studentId AND c.frequencyId=f.frequencyId AND c.scheduleId=sch.scheduleId AND c.programId=p.programId AND c.periodId=sp.periodId', [id]);
            res.json(lists);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lists = yield database_1.default.query('SELECT cs.courseId, c.courseName,f.frequency,p.program,sch.startingTime, sch.endingTime,sp.period,cs.studentId,cs.wq_1,cs.wq_2,cs.wq_3,cs.oq_1,cs.oq_2,cs.oq_3,cs.cp_1,cs.cp_2,cs.cp_3,cs.final_project,cs.final_grade FROM students_courses AS cs, students AS s,courses AS c,frequencies f,programs p, schedules sch,periods sp WHERE cs.courseId=c.crn AND cs.studentId=s.studentId AND c.frequencyId=f.frequencyId AND c.scheduleId=sch.scheduleId AND c.programId=p.programId AND c.periodId=sp.periodId');
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
            yield database_1.default.query('DELETE FROM students_courses WHERE studentId=?', [id]);
            res.json({ 'message': 'Eliminando Lista de Calificaciones del curso ' + id });
        });
    }
    //Método para actualizar un registro
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.body);
            yield database_1.default.query('UPDATE students_courses SET ? WHERE studentId=?', [req.body, id]);
            res.json({ 'message': 'Eliminando Lista de Calificaciones del curso ' + id + ' Modificada' });
        });
    }
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructurando una parte del objeto de Javascript
            const { id } = req.params;
            const list = yield database_1.default.query('SELECT sc.studentId, sc.courseId, sc.WQ_1, sc.WQ_2, sc.WQ_3, sc.OQ_1, sc.OQ_2, sc.OQ_3, sc.CP_1, sc.CP_2, sc.CP_3, sc.final_Project, sc.final_Grade FROM students_courses AS sc, courses AS c, students AS s WHERE sc.studentId = s.studentId AND sc.courseId = c.crn AND sc.studentId = ?', [id]);
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
