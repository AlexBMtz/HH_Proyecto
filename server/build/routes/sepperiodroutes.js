"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sepPeriodController_1 = require("../controllers/sepPeriodController");
class SepPeriodRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', sepPeriodController_1.sepPeriodController.index);
        this.router.post('/', sepPeriodController_1.sepPeriodController.create);
        this.router.delete('/:id', sepPeriodController_1.sepPeriodController.delete);
        this.router.put('/:id', sepPeriodController_1.sepPeriodController.update);
        this.router.get('/:id', sepPeriodController_1.sepPeriodController.details);
    }
}
const sepPeriodRoutes = new SepPeriodRoutes();
exports.default = sepPeriodRoutes.router;
