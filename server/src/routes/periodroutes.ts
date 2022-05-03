import { Router } from "express";
import {sepPeriodController} from "../controllers/periodController";

class SepPeriodRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',sepPeriodController.index);
        this.router.post('/', sepPeriodController.create);
        this.router.delete('/:id',sepPeriodController.delete);
        this.router.put('/:id',sepPeriodController.update);
        this.router.get('/:id',sepPeriodController.details);
    }
}

const sepPeriodRoutes=new SepPeriodRoutes();
export default sepPeriodRoutes.router;