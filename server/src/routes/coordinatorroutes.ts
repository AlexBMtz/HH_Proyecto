import { Router } from "express";
import {coordinatorController} from "../controllers/coordinatorController";

class CoordinatorRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',coordinatorController.index);
        this.router.post('/', coordinatorController.create);
        this.router.delete('/:id',coordinatorController.delete);
        this.router.put('/:id',coordinatorController.update);
        this.router.get('/:id',coordinatorController.details);
    }
}

const coordinatorRoutes=new CoordinatorRoutes();
export default coordinatorRoutes.router;