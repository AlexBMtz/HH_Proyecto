import { Router } from "express";
import {loginController} from "../controllers/loginController"

class LoginRoutes
{
    public router : Router = Router();

    constructor()
    {
        this.config();
    }


    config():void
    {
      //  this.router.get('/:email',loginController.getUserDetail);
      this.router.get('/:email/:password',loginController.getUserDetail);
    }
}
const loginRoutes = new LoginRoutes();
export default loginRoutes.router;