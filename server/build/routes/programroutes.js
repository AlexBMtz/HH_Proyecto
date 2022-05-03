"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const programController_1 = require("../controllers/programController");
class ProgramRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', programController_1.programController.index);
        this.router.post('/', programController_1.programController.create);
        this.router.delete('/:id', programController_1.programController.delete);
        this.router.put('/:id', programController_1.programController.update);
        this.router.get('/:id', programController_1.programController.details);
    }
}
const programRoutes = new ProgramRoutes();
exports.default = programRoutes.router;
