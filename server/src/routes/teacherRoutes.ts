import { Router } from "express";
import {teacherController} from "../controllers/teacherController";

class TeacherRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',teacherController.index);
        this.router.post('/', teacherController.create);
        this.router.delete('/:id',teacherController.delete);
        this.router.put('/:id',teacherController.update);
        this.router.get('/:id',teacherController.details);
    }
}

const teacherRoutes=new TeacherRoutes();
export default teacherRoutes.router;