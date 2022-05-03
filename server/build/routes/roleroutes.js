"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = require("../controllers/roleController");
class RoleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', roleController_1.roleController.index);
        this.router.post('/', roleController_1.roleController.create);
        this.router.delete('/:id', roleController_1.roleController.delete);
        this.router.put('/:id', roleController_1.roleController.update);
        this.router.get('/:id', roleController_1.roleController.details);
    }
}
const roleRoutes = new RoleRoutes();
exports.default = roleRoutes.router;
