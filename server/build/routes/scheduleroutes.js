"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scheduleController_1 = require("../controllers/scheduleController");
class ScheduleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', scheduleController_1.scheduleController.index);
        this.router.post('/', scheduleController_1.scheduleController.create);
        this.router.delete('/:id', scheduleController_1.scheduleController.delete);
        this.router.put('/:id', scheduleController_1.scheduleController.update);
        this.router.get('/:id', scheduleController_1.scheduleController.details);
        // this.router.get('/:startingDate/:endingDate',scheduleController.validateRow);
    }
}
const scheduleRoutes = new ScheduleRoutes();
exports.default = scheduleRoutes.router;
