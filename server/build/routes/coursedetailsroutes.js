"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseDetailsController_1 = require("../controllers/courseDetailsController");
class StudentsCoursesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', courseDetailsController_1.studentsCoursesController.index);
        this.router.post('/', courseDetailsController_1.studentsCoursesController.create);
        this.router.delete('/:id', courseDetailsController_1.studentsCoursesController.delete);
        this.router.put('/:id', courseDetailsController_1.studentsCoursesController.update);
        this.router.get('/:id', courseDetailsController_1.studentsCoursesController.details);
    }
}
const studentsCoursesRoutes = new StudentsCoursesRoutes();
exports.default = studentsCoursesRoutes.router;
