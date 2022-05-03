"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../controllers/courseController");
class CourseRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', courseController_1.courseController.index);
        this.router.post('/', courseController_1.courseController.create);
        this.router.delete('/:id', courseController_1.courseController.delete);
        this.router.put('/:id', courseController_1.courseController.update);
        this.router.get('/:id', courseController_1.courseController.details);
    }
}
const courseRoutes = new CourseRoutes();
exports.default = courseRoutes.router;
