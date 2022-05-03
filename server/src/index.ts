import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import frequencyRoutes from './routes/frequencyroutes';
import programRoutes from './routes/programroutes';
import scheduleRoutes from './routes/scheduleroutes';
import roleRoutes from './routes/roleroutes';
import periodRoutes from './routes/periodroutes';
import userRoutes from './routes/userroutes';
import coordinatorRoutes from './routes/coordinatorroutes';
import studentRouters from './routes/studentrouters';
import teacherRoutes from './routes/teacherRoutes';
import courseRoutes from './routes/courseroutes';
import courseDetailsRoutes from './routes/coursedetailsroutes';

class Server
{
    public app:Application; 

    constructor()
    {
        this.app=express();
        this.config();
        this.routes();
    }

    config():void
    {
        this.app.set('port',process.env.PORT||5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    
    start():void
    {
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor en el puerto: ',this.app.get('port'));
        });
    }

    routes():void
    {
        this.app.use('/api/frequencies',frequencyRoutes);
        this.app.use('/api/programs',programRoutes);
        this.app.use('/api/schedules',scheduleRoutes);
        this.app.use('/api/roles',roleRoutes);
        this.app.use('/api/periods',periodRoutes);
        this.app.use('/api/users',userRoutes);
        this.app.use('/api/coordinators',coordinatorRoutes);
        this.app.use("/api/students",studentRouters);
        this.app.use("/api/teachers",teacherRoutes);
        this.app.use("/api/courses",courseRoutes);
        this.app.use("/api/courseDetails",courseDetailsRoutes);
    }
}

const server=new Server();

server.start();
