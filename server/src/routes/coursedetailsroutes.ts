import { Router } from "express";
import courseDetailsController from "../controllers/courseDetailsController";

class courseDetailsRoutes{
    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{
        this.router.get('/',courseDetailsController.list);
        this.router.get('/Course/:id',courseDetailsController.index);
        this.router.post('/', courseDetailsController.create);
        this.router.delete('/:id',courseDetailsController.delete);
        this.router.put('/:id',courseDetailsController.update);
        this.router.get('/:id',courseDetailsController.details);
    }
}

const courseDetailRoutes=new courseDetailsRoutes();
export default courseDetailRoutes.router;