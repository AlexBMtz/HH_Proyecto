import {Request,Response} from 'express';
import pool from '../database';

class CourseController{

    public async index(req:Request, res:Response ){
        const courses = await pool.query('SELECT c.crn,c.courseName,c.startingDate,f.frequency,s.startingTime, s.endingTime, u.firstName, u.fatherLastName, u.motherLastName FROM courses c, frequencies f, schedules s, teachers t, users u WHERE c.frequencyId=f.frequencyId AND c.scheduleId=s.scheduleId AND c.teacherId=t.teacherId AND t.userId=u.userId');
        res.json(courses);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO courses SET ?', [req.body]);
        console.log(req.body);
        res.json({'message':"Nuevo Curso Registrado"});
    }

    //Método para eliminar un registro
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM courses WHERE crn=?',[id]);
        res.json({'message':'Eliminando Curso '+id});
    }

    //Método para actualizar un registro
    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE courses SET ? WHERE crn=?', [req.body,id]);
        console.log(req.body);
        res.json({'message':'Curso '+id+ ' Modificado'});
    }

    public async details(req:Request,res:Response):Promise<any>{
        //Destructurando una parte del objeto de Javascript
        const {id}=req.params;
        const course= await pool.query('SELECT * FROM courses WHERE crn=?',[id]);

        if(course.length > 0){
            console.log(course[0]);
            return res.json(course[0]);
        }  
        else {
            res.status(404).json({'message':'Curso no encontrado'});
        }
    }
}

export const courseController=new CourseController();
export default courseController;