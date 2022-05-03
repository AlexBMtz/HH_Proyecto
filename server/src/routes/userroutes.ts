import { Router } from "express";
import {userController} from "../controllers/userController";

class UserRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',userController.index);
        this.router.post('/', userController.create);
        this.router.delete('/:id',userController.delete);
        this.router.put('/:id',userController.update);
        this.router.get('/:id',userController.details);
    }
}

const userRoutes=new UserRoutes();
export default userRoutes.router;