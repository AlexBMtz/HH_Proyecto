"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsCoursesController_1 = require("../controllers/studentsCoursesController");
class StudentsCoursesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', studentsCoursesController_1.studentsCoursesController.index);
        this.router.post('/', studentsCoursesController_1.studentsCoursesController.create);
        this.router.delete('/:id', studentsCoursesController_1.studentsCoursesController.delete);
        this.router.put('/:id', studentsCoursesController_1.studentsCoursesController.update);
        this.router.get('/:id', studentsCoursesController_1.studentsCoursesController.details);
    }
}
const studentsCoursesRoutes = new StudentsCoursesRoutes();
exports.default = studentsCoursesRoutes.router;
