"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const frequencyController_1 = require("../controllers/frequencyController");
class FrequencyRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', frequencyController_1.frequencyController.index);
        this.router.post('/', frequencyController_1.frequencyController.create);
        this.router.delete('/:id', frequencyController_1.frequencyController.delete);
        this.router.put('/:id', frequencyController_1.frequencyController.update);
        this.router.get('/:id', frequencyController_1.frequencyController.details);
    }
}
const frequencyRoutes = new FrequencyRoutes();
exports.default = frequencyRoutes.router;
