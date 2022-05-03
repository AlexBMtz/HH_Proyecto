import { Router } from "express";
import {programController} from "../controllers/programController";

class ProgramRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',programController.index);
        this.router.post('/', programController.create);
        this.router.delete('/:id',programController.delete);
        this.router.put('/:id',programController.update);
        this.router.get('/:id',programController.details);
    }
}

const programRoutes=new ProgramRoutes();
export default programRoutes.router;