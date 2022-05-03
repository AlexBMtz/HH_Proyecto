import { Router } from "express";
import {roleController} from "../controllers/roleController";

class RoleRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',roleController.index);
        this.router.post('/', roleController.create);
        this.router.delete('/:id',roleController.delete);
        this.router.put('/:id',roleController.update);
        this.router.get('/:id',roleController.details);
    }
}

const roleRoutes=new RoleRoutes();
export default roleRoutes.router;