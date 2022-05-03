"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coordinatorController_1 = require("../controllers/coordinatorController");
class CoordinatorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', coordinatorController_1.coordinatorController.index);
        this.router.post('/', coordinatorController_1.coordinatorController.create);
        this.router.delete('/:id', coordinatorController_1.coordinatorController.delete);
        this.router.put('/:id', coordinatorController_1.coordinatorController.update);
        this.router.get('/:id', coordinatorController_1.coordinatorController.details);
    }
}
const coordinatorRoutes = new CoordinatorRoutes();
exports.default = coordinatorRoutes.router;
