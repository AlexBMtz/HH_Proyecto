import {Router} from 'express';
import {frequencyController} from '../controllers/frequencyController';

class FrequencyRoutes{

    public router:Router = Router();

    constructor(){
        this.config()
    }

    config():void{

        this.router.get('/',frequencyController.index);
        this.router.post('/', frequencyController.create);
        this.router.delete('/:id',frequencyController.delete);
        this.router.put('/:id',frequencyController.update);
        this.router.get('/:id',frequencyController.details);
    }
}

const frequencyRoutes=new FrequencyRoutes();
export default frequencyRoutes.router;