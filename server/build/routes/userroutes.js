"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.index);
        this.router.post('/', userController_1.userController.create);
        this.router.delete('/:id', userController_1.userController.delete);
        this.router.put('/:id', userController_1.userController.update);
        this.router.get('/:id', userController_1.userController.details);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
