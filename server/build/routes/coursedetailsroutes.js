"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseDetailsController_1 = __importDefault(require("../controllers/courseDetailsController"));
class courseDetailsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/Course/:id', courseDetailsController_1.default.index);
        this.router.post('/', courseDetailsController_1.default.create);
        this.router.delete('/:id', courseDetailsController_1.default.delete);
        this.router.put('/:id', courseDetailsController_1.default.update);
        this.router.get('/:id', courseDetailsController_1.default.details);
    }
}
const courseDetailRoutes = new courseDetailsRoutes();
exports.default = courseDetailRoutes.router;
