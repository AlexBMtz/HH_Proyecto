import { Router } from "express";
import {studentController} from "../controllers/studentController";

class StudentRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',studentController.index);
        this.router.post('/', studentController.create);
        this.router.delete('/:id',studentController.delete);
        this.router.put('/:id',studentController.update);
        this.router.get('/:id',studentController.details);
    }
}

const studentRoutes=new StudentRoutes();
export default studentRoutes.router;