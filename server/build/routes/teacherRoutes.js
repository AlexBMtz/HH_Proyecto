"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherController_1 = require("../controllers/teacherController");
class TeacherRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', teacherController_1.teacherController.index);
        this.router.post('/', teacherController_1.teacherController.create);
        this.router.delete('/:id', teacherController_1.teacherController.delete);
        this.router.put('/:id', teacherController_1.teacherController.update);
        this.router.get('/:id', teacherController_1.teacherController.details);
    }
}
const teacherRoutes = new TeacherRoutes();
exports.default = teacherRoutes.router;
