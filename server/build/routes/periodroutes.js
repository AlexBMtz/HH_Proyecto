"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const periodController_1 = require("../controllers/periodController");
class SepPeriodRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', periodController_1.sepPeriodController.index);
        this.router.post('/', periodController_1.sepPeriodController.create);
        this.router.delete('/:id', periodController_1.sepPeriodController.delete);
        this.router.put('/:id', periodController_1.sepPeriodController.update);
        this.router.get('/:id', periodController_1.sepPeriodController.details);
    }
}
const sepPeriodRoutes = new SepPeriodRoutes();
exports.default = sepPeriodRoutes.router;
