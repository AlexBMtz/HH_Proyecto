import { Router } from "express";
import {studentsCoursesController} from "../controllers/studentsCoursesController";

class StudentsCoursesRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',studentsCoursesController.index);
        this.router.post('/', studentsCoursesController.create);
        this.router.delete('/:id',studentsCoursesController.delete);
        this.router.put('/:id',studentsCoursesController.update);
        this.router.get('/:id',studentsCoursesController.details);
    }
}

const studentsCoursesRoutes=new StudentsCoursesRoutes();
export default studentsCoursesRoutes.router;